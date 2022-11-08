import Head from 'next/head';
import { FC, useState } from 'react';
import {
  Button,
  BuyMeCoffee,
  Cover,
  Post,
  PostGrid,
  Section,
  SocialNetworks,
  Title,
} from '../components';
import { IPost } from '../models';
import { loadPosts } from './api/posts';

type PropsType = {
  initialPosts: IPost[];
  total: number;
};

const LOAD_MORE_STEPS = 4;

export const Home: FC<PropsType> = ({ initialPosts, total }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEPS);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEPS}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEPS);
      setPosts([...posts, ...data.posts]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
      <title>My super blog</title>
    </Head>
      <Section>
        <Cover title="Vadym <br /> Kononenko" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button disabled={loading} onClick={getMorePosts}>
              Load More Posts
            </Button>
          </div>
        )}
      </Section>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEPS);
  return { props: { initialPosts: posts, total } };
};
