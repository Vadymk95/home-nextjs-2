import {
  BuyMeCoffee,
  Cover,
  Section,
  SocialNetworks,
  Title,
} from '../components';

export default function Home() {
  return (
    <>
      <Section>
        <Cover title="Vadym <br /> Kononenko" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </>
  );
}
