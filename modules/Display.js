class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";

    this.toShow.forEach((product) => {
      const quantity = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, quantity);
    });

    this.calulateTotalPrice();
  }

  createCard(data, quantity) {
    const { id, name, price, image, alt } = data;

    const cardElement = document.createElement("div");

    const imageElement = this.productImage(image, alt);
    const infoElement = this.productInfo(id, name, price);

    cardElement.innerHTML = imageElement;
    cardElement.innerHTML += infoElement;

    if (this.constructor.name === "Cart") {
      const controlElement = this.productControl(id, quantity);
      cardElement.innerHTML += controlElement;
    }

    this.parent.appendChild(cardElement);
  }

  productImage(image, alt) {
    return `<img src=${image} alt=${alt} />`;
  }
}

export default Display;
