import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onAddToCartHandler = (selectedItems) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: selectedItems,
    })
  };
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{price}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
