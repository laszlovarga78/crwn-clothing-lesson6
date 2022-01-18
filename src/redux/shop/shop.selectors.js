import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/**
 * A selectCollection megkapja az string formátumú url paramétert és visszatér egy createSelector függvénnyel, ami egy "curried függvény", ami visszatér egy másik függvénnyel
 *
 */
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
