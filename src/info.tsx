import image_1 from "./assets/image-product-1.jpg";
import image_1_thumbnail from "./assets/image-product-1-thumbnail.jpg";
import image_2 from "./assets/image-product-2.jpg";
import image_2_thumbnail from "./assets/image-product-2-thumbnail.jpg";
import image_3 from "./assets/image-product-3.jpg";
import image_3_thumbnail from "./assets/image-product-3-thumbnail.jpg";
import image_4 from "./assets/image-product-4.jpg";
import image_4_thumbnail from "./assets/image-product-4-thumbnail.jpg";

export const product = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  thumbnail: image_1_thumbnail,
};

const productImages = [
  { full: image_1, thumbnail: image_1_thumbnail },
  { full: image_2, thumbnail: image_2_thumbnail },
  { full: image_3, thumbnail: image_3_thumbnail },
  { full: image_4, thumbnail: image_4_thumbnail },
];
export default productImages;
