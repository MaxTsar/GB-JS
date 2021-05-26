'use strict'

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
  const percent25 = this.price / 100 * 25;
  this.price = this.price - percent25;

  return this;
}

const product1 = new Product('Auto', 1000);
product1.make25PercentDiscount();
console.log('>>>', product1.price);

class ProductCls {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    const percent25 = this.price / 100 * 25;
    this.price = this.price - percent25;

    return this;
  }
}

const product2 = new ProductCls('Window', 500);
product2.make25PercentDiscount();
console.log('>>>', product2.price);
