import { useState } from "react";
import productImages from "../info";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";

const Products_component = () => {
  const [selectedImage, setSelectedImage] = useState(0);

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
              onClick={() =>
                setSelectedImage(
                  (selectedImage - 1 + productImages.length) %
                    productImages.length,
                )
              }
              className="rounded-full bg-white px-4 py-3"
            >
              <img src={previous} alt="" />
            </button>
            <button
              type="button"
              aria-label="Next product image"
              onClick={() =>
                setSelectedImage((selectedImage + 1) % productImages.length)
              }
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
    </main>
  );
};

export default Products_component;
