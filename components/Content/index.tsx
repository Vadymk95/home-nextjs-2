import { FC } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { clientConfig } from '../../lib/client';
import cl from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  className?: string;
  body: any;
};

const Content: FC<PropsType> = ({ className, body }) => {
  return (
    <div className={cl(styles.content, className)}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
