import { Image, ImageItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ gallery, onImageClick }) => {
  return gallery.map(({ id, largeImageURL, tags, webformatURL }) => (
    <ImageItem
      key={id}
      onClick={() => {
        onImageClick(largeImageURL, tags);
      }}
    >
      <Image src={webformatURL} alt={tags} />
    </ImageItem>
  ));
};