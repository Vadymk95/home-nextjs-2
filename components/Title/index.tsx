import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  children: ReactNode;
};

const Title: FC<PropsType> = ({ children, className }) => {
  return <h2 className={cl(className, styles.title)}>{children}</h2>;
};

export default Title;
