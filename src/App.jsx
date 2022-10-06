import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  return (
    <CartProvider>
      {isShowCart && <Cart cartVisibility={setIsShowCart}/>}
      <Header cartVisibility={setIsShowCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
