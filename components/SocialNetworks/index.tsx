import { createElement, FC } from 'react';
import cl from 'classnames';
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const socialNetworks = [
  { id: 1, href: 'https://github.com/', icon: AiFillGithub },
  { id: 2, href: 'https://youtube.com/', icon: AiFillYoutube },
  { id: 3, href: 'https://twitter.com/', icon: AiFillTwitterCircle },
  { id: 4, href: 'https://linkedin.com/', icon: AiFillLinkedin },
];

type PropsType = {
  className?: string;
};

const SocialNetworks: FC<PropsType> = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((sn) => (
          <li key={sn.id} className={styles.listItem}>
            <a
              href={sn.href}
              target="_blank"
              rel="noreferrer"
              className={styles.listLink}
            >
              {createElement(sn.icon, { color: 'black', size: 50 })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
