import * as cart from "./services/cart"
import createItem from "./services/item"

const theusCart = {};

console.log("WELCOME TO YOUR SHOPEE CART!")

const item1 = await createItem("Shampoo Monange", 11.00, 1);
const item2 = await createItem("RTX 3090", 4000.00, 1);

await cartService.addItem(theusCart, item1);
await cartService.addItem(theusCart, item2);

await cartService.removeItem(theusCart, item1);

await cartService.displaycart(theusCart);

await cartService.calculateTotal(theusCart);