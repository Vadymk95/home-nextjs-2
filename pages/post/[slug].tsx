import { format } from 'date-fns';
import Head from 'next/head';
import { FC } from 'react';
import { Title, Article, Content } from '../../components';
import { client } from '../../lib/client';
import { IPost } from '../../models';
import styles from './styles.module.scss';

type PropsType = {
  post: IPost;
};

const Post: FC<PropsType> = ({ post }) => {
  const date = format(new Date(post.publishedDate), 'dd MMM yyyy');
  return (
    <>
      <Head>
        <title>My super blog</title>
      </Head>
      <Article backUrl="/" className={styles.post}>
        <Title className={styles.postTitle}>{post.title}</Title>
        <p className={styles.postDate}>{date}</p>
        <Content body={post.body} />
      </Article>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[type == "post"] {
    slug {
      current
    }
  }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post: IPost) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const post = await client.fetch(query);
  return {
    props: { post },
  };
}
