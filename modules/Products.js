class Products {
  constructor(parent, products, cart) {
    this.parent = parent;
    this.products = products;
    this.cart = cart;
    this.parent.addEventListener("click", this);
  }

  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }
  createCard(data) {
    const { id, name, price, image, alt } = data;

    const cardElement = document.createElement("div");

    const imageElement = this.productImage(image, alt);
    const infoElement = this.productInfo(id, name, price);

    cardElement.innerHTML = imageElement;
    cardElement.innerHTML += infoElement;

    this.parent.appendChild(cardElement);
  }

  productImage(image, alt) {
    return `<img src=${image} alt=${alt} />`;
  }

  productInfo(id, name, price) {
    return `
        <div class="product-info">
            <h3>${name}</h3>
            <div>
                <span>$ ${price}</span>
                <button data-id="${id}">+</button>
            </div>
        </div>
    `;
  }

  handleEvent() {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }

  addToCart(id) {
    const product = this.products.find((item) => item.id === +id);
    this.cart.products.push(product);
    console.log(this.cart)
  }
}
export default Products;
