import type { FC } from 'react';

import styles from 'components/Loader/style.module.scss';

//not generic loader because i would like to not waste my time for unnecessary things
const Loader: FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.body}></div>
    </div>
  );
};

export default Loader;
