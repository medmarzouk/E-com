
export function getCartProducts(): any[] {
    let cartProducts: any[] = [];
    if ("cart" in localStorage) {
      cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    return cartProducts;
  }