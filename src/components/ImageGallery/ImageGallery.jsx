import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({ gallery, onImageClick }) => {
  return (
    <ImageGalleryList className="gallery">
      <ImageGalleryItem gallery={gallery} onImageClick={onImageClick} />
    </ImageGalleryList>
  );
};
