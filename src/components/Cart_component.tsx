import remove from "../assets/icon-delete.svg";

export type CartItem = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartProps = {
  item: CartItem | null;
  onRemove: () => void;
  onCheckout: () => void;
};

const Cart_component = ({ item, onRemove, onCheckout }: CartProps) => {
  return (
    <div className="absolute right-0 top-14 z-40 w-[min(22rem,calc(100vw-2rem))] rounded-lg bg-white shadow-xl">
      <h2 className="border-b border-gray-200 px-5 py-4 font-bold text-[hsl(220,13%,13%)]">
        Cart
      </h2>
      {item ? (
        <div className="flex flex-col gap-5 p-5">
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-12 w-12 rounded object-cover"
            />
            <div className="min-w-0 flex-1 text-[hsl(219,9%,45%)]">
              <p className="truncate">{item.name}</p>
              <p>
                ${item.price.toFixed(2)} × {item.quantity}{" "}
                <strong className="text-[hsl(220,13%,13%)]">
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </p>
            </div>
            <button
              type="button"
              onClick={onRemove}
              aria-label={`Remove ${item.name} from cart`}
              className="text-gray-400 hover:text-[hsl(220,13%,13%)]"
            >
              <img src={remove} alt="Remove item" />
            </button>
          </div>
          <button
            type="button"
            onClick={onCheckout}
            className="rounded-lg bg-orange-500 px-4 py-3 font-bold text-black hover:bg-orange-600"
          >
            Checkout
          </button>
        </div>
      ) : (
        <p className="p-10 text-center font-bold text-[hsl(219,9%,45%)]">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default Cart_component;
