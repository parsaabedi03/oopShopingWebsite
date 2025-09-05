import Display from "./Display.js";

class Cart extends Display {
  constructor(parent, price) {
    super(parent);
    this.price = price;
    this.products = [];
    this.toShow = [];
  }

  productInfo(id, name, price) {
    return `
        <div class="cartInfo" data-id=${id}>
          <h4>${name}</h4>
          <p>$ ${price}</p>
        </div>
    `;
  }

  productControl(id, quantity) {
    return `
        <div class="cartControl">
            <div>
                <button data-id=${id}>-</button>
                <span>${quantity}</span>
                <button data-id=${id}>+</button>
            </div>
            <button data-id=${id}>Remove</button>
        </div>
    `;
  }

  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.textContent;

    if (tagName !== "BUTTON") return;

    switch (type) {
      case "+":
        this.increase(id);
        break;
      case "-":
        this.decrease(id);
        break;
      default:
        this.remove(id);
        break;
    }
  }

  increase(id) {
    const product = this.products.find((product) => product.id === +id);
    this.products.push(product);
    this.showProducts();
  }

  decrease(id) {
    const index = this.products.findIndex((product) => product.id === +id);
    this.products.splice(index, 1);
    this.showProducts();
  }

  remove(id) {
    const newProducts = this.products.filter((product) => product.id !== +id);
    this.products = newProducts;
    this.showProducts();
  }

  calulateTotalPrice() {
    const total = this.products.reduce((acc, cur) => (acc += cur.price), 0);
    this.price.textContent = "$ " + total;
  }
}

export default Cart;
