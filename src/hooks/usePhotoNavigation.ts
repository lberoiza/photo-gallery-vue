import type { Photo } from "@/models/Photo.model";

export const usePhotoNavigation = (photos: Photo[]) => {

  function getNextPhoto(currentPhoto: Photo) {
    const totalOfPhotos = photos.length;
    const index = photos.findIndex(e => e.id === currentPhoto.id);
    if (index + 1 >= totalOfPhotos) {
      return null;
    }
    return photos[index + 1];
  }

  function getPreviousPhoto(currentPhoto: Photo) {
    const index = photos.findIndex(e => e.id === currentPhoto.id);
    if (index <= 0) {
      return null;
    }
    return photos[index - 1];
  }

  return {getNextPhoto, getPreviousPhoto}


}