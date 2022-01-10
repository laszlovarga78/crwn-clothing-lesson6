import { createSelector } from "reselect";

/**
 * Olyan input selector, ami a teljes state-et kapja meg és visszaadja belőle csak a cart-ot.
 */
const selectCart = (state) => state.cart;

// egy output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// másik output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
