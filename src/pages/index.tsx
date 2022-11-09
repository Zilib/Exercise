import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useAlbumPhotos } from 'api/photos';
import AlbumItem from 'components/AlbumItem';
import Loader from 'components/Loader';

const IndexPage: FC = () => {
  const { data, isLoading, isError } = useAlbumPhotos();
  const { photoId } = useParams();

  return (
    <div className="grid grid-cols-2 gap-2">
      {isLoading && new Array(5).fill(0).map((_, index) => <Loader key={index} />)}
      {isError && <h1>Nie udało się pobrać danych</h1>}
      {data && data.length > 0 ? (
        data.map((photo) => (
          <AlbumItem isActive={!!photoId && `${photo.id}` === photoId} photo={photo} key={photo.id} />
        ))
      ) : !isLoading ? (
        <h1>Brak elementów</h1>
      ) : null}
    </div>
  );
};

export default IndexPage;
