import { FC, ReactNode } from 'react';
import Link from 'next/link';
import cl from 'classnames';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './index.module.scss';

type PropsType = {
  backUrl: string;
  className?: string;
  children: ReactNode;
};

const Article: FC<PropsType> = ({ children, className, backUrl }) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl} legacyBehavior>
        <a className={styles.articleBack}>
          <AiOutlineArrowLeft />
        </a>
      </Link>
      <div className={styles.articleContent}>
        {children}
      </div>
    </article>
  );
};

export default Article;
