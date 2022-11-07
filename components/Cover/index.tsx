import { FC } from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  title: string;
};

const Cover: FC<PropsType> = ({ className, title }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <h1
        className={styles.coverTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default Cover;
