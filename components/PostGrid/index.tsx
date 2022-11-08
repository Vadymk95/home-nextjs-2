import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  children: ReactNode;
};

const PostGrid: FC<PropsType> = ({ children, className }) => {
  return <div className={cl(className, styles.postGrid)}>{children}</div>;
};

export default PostGrid;
