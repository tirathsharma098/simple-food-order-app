import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value.trim();
    if (
      isNaN(enteredAmount) ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
        setAmountIsValid(false);
        return;
    } else {
        setAmountIsValid(true);
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          ref: amountInputRef,
          id: props.id,
          type: "number",
          min: 0,
          max: 5,
          step: 1,
          defaultValue: 0,
        }}
      />
      <button className={classes.button}>+ Add</button>
      {!amountIsValid && <p style={{color:"red"}}>Enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
