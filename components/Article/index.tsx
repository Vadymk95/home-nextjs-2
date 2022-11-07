import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  children: ReactNode;
};

const Article: FC<PropsType> = ({ children, className }) => {
  return <article className={cl(className, styles.article)}>{children}</article>;
};

export default Article;
