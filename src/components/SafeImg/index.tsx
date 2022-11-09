import type { FC, ComponentProps } from 'react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames';

import placeholderImg from 'images/placeholder_img.png';
import styles from 'components/SafeImg/style.module.scss';
import Loader from 'components/Loader';

interface IProps
  extends Omit<ComponentProps<typeof LazyLoadImage>, 'alt' | 'onError' | 'height' | 'width' | 'loading'> {
  alt: string;
  width: number;
  height: number;
}

const SafeImg: FC<IProps> = ({ src, ...props }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <>
      {!isLoaded && <Loader />}
      {/* I used this package only to demonstrate i know the resolve of lazy loading image, to be honest i preffer to avoiding using solutions which can use a lot of listeners. I prefer to use pagination */}
      <LazyLoadImage
        {...props}
        threshold={300}
        placeholder={<Loader />}
        src={isError ? placeholderImg : src}
        className={classNames({ [styles.loaded]: isLoaded }, styles.safe_img)}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};

export default SafeImg;
