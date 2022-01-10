import  CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utiljs";

// kiinduló állapot
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // régi (...state.cartItems) és új cartItemek
        //cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
