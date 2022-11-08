import { NextApiResponse, NextApiRequest } from 'next';
import { client } from '../../lib/client';
import { IPost } from '../../models';

type ReqType = { start: number; end: number };

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
  const { start, end }: Partial<ReqType> = req.query;
  console.log(start);
  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({
      error: 'Data invalid',
    });
  }

  const { posts, total } = await loadPosts(start!, end!);

  res.status(200).json({
    posts,
    total,
  });
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
