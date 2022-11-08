import { FC, useState } from 'react';
import {
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
  console.log(initialPosts)
  const [ posts, setPosts ] = useState(initialPosts);
  return (
    <>
      <Section>
        <Cover title="Vadym <br /> Kononenko" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => <Post key={post.slug.current} {...post}/>)}
        </PostGrid>
      </Section>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEPS);
  return { props: { initialPosts: posts, total } };
};
