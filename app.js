import Cart from "./modules/Cart.js";
import Products from "./modules/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cartList");
const totalPriceNode = document.querySelector("span");
// const totalPriceNode = document.querySelector("span");

async function render() {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
