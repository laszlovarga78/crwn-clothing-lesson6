import memoize from "lodash.memoize";
import { createSelector } from "reselect";

/**
 * Azért használjuk ezt az objektumot, mert az url paraméter (pl: /shop/hats) egy sztring, míg az id. amivel match-elni akarunk az egy szám. Ezért összemappeljük a szövegeket az id-kal
 */
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

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
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
