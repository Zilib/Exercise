import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface IAlbumPhoto {
  albumId: number;
  id: number;
  url: string;
  title: string;
  thumbnailUrl: string;
}

const apiEndpoint = 'https://jsonplaceholder.typicode.com/albums/1/photos';

const getAlbumPhotos = async () => {
  try {
    const { data } = await axios.get<IAlbumPhoto[]>(apiEndpoint);
    return data;
  } catch (error) {
    throw error;
  }
};

export const useAlbumPhotos = () => {
  return useQuery([apiEndpoint], getAlbumPhotos);
};
