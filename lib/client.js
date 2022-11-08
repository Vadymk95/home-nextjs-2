import imageBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const clientConfig = {
  projectId: 'h3ymxwt0',
  dataset: 'production',
};

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);
