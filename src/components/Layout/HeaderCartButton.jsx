import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [isBump, isBumpFn] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
  }, 0);
  useEffect(()=>{
    isBumpFn(true);
    const bumpTimeoutId = setTimeout(()=>{
      isBumpFn(false);
    },300);
    return ()=> {
      clearTimeout(bumpTimeoutId);
    }
  }, [numberOfCartItems])
  const btnClasses = `${classes.button} ${isBump? classes.bump: ''}`;
  return (
    <button className={btnClasses} onClick={()=>{props.cartVisibility(true)}}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
