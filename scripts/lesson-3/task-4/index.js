"use strict";

const _products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const productsWithPhoto = _products.filter(({ photos }) => {
  return Boolean(photos) && photos.length > 0;
});

const sortedProducts = _products.sort((a, b) => {
  if (a.price < b.price) {
    return - 1;
  }

  if (a.price > b.price) {
    return 1;
  }

  return 0;
});

console.log('productsWithPhoto ->', productsWithPhoto)
console.log('sortedProducts ->', sortedProducts)