import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      {
        const updatedTotalPrice =
        state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      let updatedItems;
      if (existingCartItemIndex >= 0) {
        const prevItem = state.items[existingCartItemIndex];
        const updateItem = {
          ...prevItem,
          amount: prevItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updateItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalPrice,
      };
      }
    case 'REMOVE':
      {
        // console.log('state items: ', state.items, " action items: ", action.item);
        const removingItemIndex = state.items.findIndex(item => item.id===action.id);
        const prevItem = state.items[removingItemIndex];
        let updatedItems;
        const updatedTotalPrice = state.totalAmount-prevItem.price;
        if(prevItem.amount === 1){
          // console.log("first exec: ", prevItem);
          updatedItems = state.items.filter(item => {
            return item.id === prevItem.id ? false: true;
          })
        }else{
          // console.log("second exec: ", prevItem);
          const latestAmount = prevItem.amount-1;
          updatedItems = state.items.map(item => {
            return item.id === prevItem.id ? {...item, amount: latestAmount}: item;
          })
        }
        // console.log('updated items: ', updatedItems);
        return {
          items: updatedItems,
          totalAmount: updatedTotalPrice,
        };
      }
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
