import "./App.css";
import { useState } from "react";
import Add_toCart_component from "./components/Add_toCart_component";
import Description_component from "./components/Description_component";
import Header_component from "./components/Header_component";
import Products_component from "./components/Products_component";
import { type CartItem } from "./components/Cart_component";
import { product } from "./info";

function App() {
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const addToCart = () => {
    if (selectedQuantity === 0) return;

    setCartItem((currentItem) => ({
      name: product.name,
      price: product.price,
      image: product.thumbnail,
      quantity: (currentItem?.quantity ?? 0) + selectedQuantity,
    }));
    setSelectedQuantity(0);
  };

  return (
    <>
      <Header_component
        item={cartItem}
        onRemoveItem={() => setCartItem(null)}
        onCheckout={() => setIsGalleryOpen(true)}
      />
      <div className="flex flex-col gap-14 md:flex-row md:gap-24">
        <Products_component
          isGalleryOpen={isGalleryOpen}
          onCloseGallery={() => setIsGalleryOpen(false)}
        />
        <div className="flex flex-col">
          <Description_component />
          <Add_toCart_component
            count={selectedQuantity}
            onCountChange={setSelectedQuantity}
            onAddToCart={addToCart}
          />
        </div>
      </div>
    </>
  );
}

export default App;
