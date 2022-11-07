import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className: string;
  children: ReactNode;
};

const Section: FC<PropsType> = ({ children, className }) => {
  return (
    <section className={cl(className, styles.section)}>{children}</section>
  );
};

export default Section;
