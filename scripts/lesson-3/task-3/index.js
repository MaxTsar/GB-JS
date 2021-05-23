"use strict";

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

const discountPercent = 15;

products.forEach(({ price }) => {
  const priceWithDicount = price - (price / 100 * discountPercent);
  console.log(priceWithDicount)
});

// alternative
const productsWithDiscount = products.map((product) => {
  const priceWithDicount = product.price - (product.price / 100 * discountPercent);

  return {
    ...product,
    priceWithDicount15: priceWithDicount,
  }
});
