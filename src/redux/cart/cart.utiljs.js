/**
 * Ennek funkciója lesz, hogy ha a kosárba ugyanazt a tételt tesszük többször, akkor a tétel darabszáma növekedjen és ne a tétel kerüljön többször a kosárba új tételként.
 * Emellett más egyéb funkciók is kerülnek ide, amik a kosárral kapcsolatosak.
 */

// első param az eddigi tételek, második pedig amit hozzá akarunk adni
export const addItemToCart = (cartItems, cartItemToAdd) => {

  // a find visszaadja a feltételnek megfelelő első találatot
  // itt most csak azt vizsgáljuk, hogy a hozzáadandó tétel már benne van-e a kosárban
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  /**
   * ha a tétel már benne van találat, akkor a map()-el egy új tömböt adunk vissza és a quantity-t növeljük egyel
   */ 
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  /**
   * Ha nem volt benne, akkor szintén új tömböt adunk vissza: ami tartalmazza az eddigi elemeket (...cartItems, plusz az új elem quantity = 1 kezdőértékkel
   */
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
