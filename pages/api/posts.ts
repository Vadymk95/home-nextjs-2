import { NextApiResponse, NextApiRequest } from 'next';
import { client } from '../../lib/client';
import { IPost } from '../../models';

export default function posts(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}

export async function loadPosts(
  start: number,
  end: number
): Promise<{ posts: IPost[]; total: number }> {
  const query = `{
    "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
    "total": count(*[_type == "post"])
  }`;
  const { posts, total } = await client.fetch(query);
  return { posts, total };
}
