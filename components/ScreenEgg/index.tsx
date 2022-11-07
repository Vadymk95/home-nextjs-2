import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  type?: 'left' | 'right';
  children: ReactNode;
};

const ScreenEgg: FC<PropsType> = ({ className, type, children }) => {
  return (
    <div
      className={cl(
        className,
        styles.screenEgg,
        type === 'right' ? styles.screenEggRight : styles.screenEggLeft
      )}
    >
      {children}
    </div>
  );
};

export default ScreenEgg;
