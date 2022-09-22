import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "shushi", amount: "2", price: 12.98 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal cartVisibility={props.cartVisibility}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>36.43</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={()=>{props.cartVisibility(false)}}>Close</button>
            <button className={classes["button"]}>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;
