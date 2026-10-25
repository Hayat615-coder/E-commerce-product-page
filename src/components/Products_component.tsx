import { useEffect, useState } from "react";
import productImages from "../info";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";

type ProductsProps = {
  isGalleryOpen: boolean;
  onCloseGallery: () => void;
};

const Products_component = ({
  isGalleryOpen,
  onCloseGallery,
}: ProductsProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseGallery();
      if (event.key === "ArrowLeft") {
        setSelectedImage(
          (current) =>
            (current - 1 + productImages.length) % productImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedImage((current) => (current + 1) % productImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, onCloseGallery]);

  const showPreviousImage = () =>
    setSelectedImage(
      (current) => (current - 1 + productImages.length) % productImages.length,
    );
  const showNextImage = () =>
    setSelectedImage((current) => (current + 1) % productImages.length);

  return (
    <main className="md:mr-24 md:ml-32 flex md:max-w-5xl flex-col items-center gap-6  py-10">
      <div className="flex w-full md:max-w-md flex-col gap-6">
        <div className="relative w-full">
          <img
            src={productImages[selectedImage].full}
            alt={`Product view ${selectedImage + 1}`}
            className="w-full rounded-xl"
          />
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:hidden">
            <button
              type="button"
              aria-label="Previous product image"
              onClick={showPreviousImage}
              className="rounded-full bg-white px-4 py-3"
            >
              <img src={previous} alt="" />
            </button>
            <button
              type="button"
              aria-label="Next product image"
              onClick={showNextImage}
              className="rounded-full bg-white px-4 py-3"
            >
              <img src={next} alt="" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-between gap-4">
          {productImages.map((image, index) => (
            <button
              key={image.thumbnail}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`Show product image ${index + 1}`}
              aria-pressed={selectedImage === index}
              className={`overflow-hidden rounded-lg ${
                selectedImage === index
                  ? "ring-2 ring-orange-500 opacity-60"
                  : "hover:opacity-70"
              }`}
            >
              <img
                src={image.thumbnail}
                alt=""
                className="block h-auto w-full"
              />
            </button>
          ))}
        </div>
      </div>
      {isGalleryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Product image gallery"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6"
          onClick={onCloseGallery}
        >
          <div
            className="flex w-full max-w-[29.5rem] flex-col gap-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onCloseGallery}
              aria-label="Close product gallery"
              className="self-end text-4xl font-bold leading-none text-orange-500 hover:text-white"
            >
              ×
            </button>
            <div className="relative">
              <img
                src={productImages[selectedImage].full}
                alt={`Product view ${selectedImage + 1}`}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <button
                type="button"
                aria-label="Previous product image"
                onClick={showPreviousImage}
                className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
              >
                <img src={previous} alt="" />
              </button>
              <button
                type="button"
                aria-label="Next product image"
                onClick={showNextImage}
                className="absolute right-0 top-1/2 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
              >
                <img src={next} alt="" />
              </button>
            </div>
            <div className="mx-auto flex w-full justify-center gap-3 sm:gap-6">
              {productImages.map((image, index) => (
                <button
                  key={image.thumbnail}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Show product image ${index + 1}`}
                  aria-pressed={selectedImage === index}
                  className={`overflow-hidden rounded-lg bg-white ${
                    selectedImage === index
                      ? "ring-2 ring-orange-500"
                      : "hover:opacity-70"
                  }`}
                >
                  <img
                    src={image.thumbnail}
                    alt=""
                    className={`block h-[16vw] w-[16vw] max-h-20 max-w-20 object-cover ${
                      selectedImage === index ? "opacity-60" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products_component;
