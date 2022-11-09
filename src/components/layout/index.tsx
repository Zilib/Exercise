import type { FC, PropsWithChildren } from 'react';

import styles from 'components/layout/style.module.scss';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default MainLayout;
