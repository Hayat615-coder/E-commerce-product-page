import { useState } from "react";
import productImages from "../info";

const Products_component = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <img
          src={productImages[selectedImage].full}
          alt={`Product view ${selectedImage + 1}`}
          className="w-full rounded-xl"
        />
        <div className="flex justify-between gap-4">
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
