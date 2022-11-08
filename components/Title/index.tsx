import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  type?: 'small' | 'medium';
  className?: string;
  children: ReactNode;
};

const Title: FC<PropsType> = ({ children, className, type }) => {
  if (type === 'small') {
    return (
      <h3 className={cl(className, styles.title, styles.titleSmall)}>
        {children}
      </h3>
    );
  }
  return (
    <h2 className={cl(className, styles.title, styles.titleMedium)}>
      {children}
    </h2>
  );
};

export default Title;
