import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
};

const Button: FC<PropsType> = ({ className, children, disabled, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={cl(className, styles.button)}>
      {children}
    </button>
  );
};

export default Button;
