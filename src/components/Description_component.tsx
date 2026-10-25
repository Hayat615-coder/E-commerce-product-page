import { product } from "../info";

const Description_component = () => {
  return (
    <div className="md:mr-24 ml-8 mr-14 md:my-18 flex md:max-w-md flex-col gap-6">
      <h3 className="font-bold text-[hsl(219,9%,45%)]">SNEAKER COMPANY</h3>
      <h1 className="text-4xl font-bold text-[hsl(220,13%,13%)]">
        {product.name}
      </h1>

      <p className="md:font-light text-[hsl(219,9%,45%)]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row justify-between md:flex-col">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-[hsl(220,13%,13%)]">
            ${product.price.toFixed(2)}
          </span>
          <span className="bg-[hsl(220,13%,13%)] text-white px-3 py-1 rounded-md">
            50%
          </span>
        </div>
        <p className="line-through text-[hsl(219,9%,45%)]">$250.00</p>
      </div>
    </div>
  );
};

export default Description_component;
