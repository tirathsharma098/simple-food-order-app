import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  return (
    <Fragment>
      {isShowCart && <Cart cartVisibility={setIsShowCart}/>}
      <Header cartVisibility={setIsShowCart}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
