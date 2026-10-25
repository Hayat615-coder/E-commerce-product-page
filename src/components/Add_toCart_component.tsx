import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import cart from "../assets/icon-cart.svg";

type AddToCartProps = {
  count: number;
  onCountChange: (count: number) => void;
  onAddToCart: () => void;
};

const Add_toCart_component = ({
  count,
  onCountChange,
  onAddToCart,
}: AddToCartProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center w-full md:max-w-md px-8 py-4">
      <div className="flex flex-row items-center justify-between gap-8 bg-[hsl(223,64%,98%)] rounded-lg px-4 py-2 w-full md:max-w-37.5">
        <button
          type="button"
          onClick={() => onCountChange(Math.max(0, count - 1))}
        >
          <img src={minus} alt="Minus" />
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => onCountChange(count + 1)}>
          <img src={plus} alt="Plus" />
        </button>
      </div>
      <button
        onClick={onAddToCart}
        type="button"
        disabled={count === 0}
        className="flex flex-row gap-4 items-center justify-center rounded-lg px-4 py-2 bg-orange-500 text-black font-bold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full md:max-w-md"
      >
        <img src={cart} alt="Add to Cart" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default Add_toCart_component;
