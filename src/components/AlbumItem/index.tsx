import type { FC } from 'react';
import { memo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { IAlbumPhoto } from 'api/photos';
import styles from 'components/AlbumItem/style.module.scss';
import SafeImg from 'components/SafeImg';

interface IProps {
  photo: IAlbumPhoto;
  isActive: boolean;
}

const AlbumItem: FC<IProps> = ({ photo, isActive }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isActive) {
      itemRef.current?.scrollIntoView({ behavior: isMounted.current ? 'smooth' : 'auto', block: 'center' });
    }
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, [isActive]);

  return (
    <div ref={itemRef} className={classNames('relative', styles.container)}>
      <Link to={isActive ? '/' : `/photo/${photo.id}`} className={styles.image_container}>
        <SafeImg width={600} height={600} src={photo.url} alt={photo.title} />
      </Link>
      <div className={classNames(styles.title_container, { [styles.active]: isActive })}>
        <p className="red">{photo.title}</p>
      </div>
    </div>
  );
};

export default memo(AlbumItem);
