import { FC } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import ScreenEgg from '../ScreenEgg';

type PropsType = {
  className?: string;
};

const BuyMeCoffee: FC<PropsType> = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(styles.buyCoffee, className)}>
        <a
          target="_blank"
          href="https://google.com"
          rel="noreferrer"
          className={styles.buyCoffeeButton}
        >
          Buy me a coffee...
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
