import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cl from 'classnames';
import { urlFor } from '../../lib/client';
import Title from '../Title';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  image: { caption: string; asset: { _ref: string } };
  title: string;
  description: string;
  slug: { current: string };
};

const Post: FC<PropsType> = ({
  className,
  image,
  title,
  description,
  slug,
}) => {
  return (
    <Link
      legacyBehavior
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.post)}
    >
      <a className={styles.postLink}>
        <Title type="small" className={styles.postTitle}>
          {title}
        </Title>
        <div className={styles.postContent}>
          <div>
            <Image
              src={urlFor(image).url()}
              alt={image.caption}
              width="100"
              height="100"
            />
          </div>
          <p className={styles.postDescription}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Post;
