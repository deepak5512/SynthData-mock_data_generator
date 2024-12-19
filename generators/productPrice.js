const data = require("../data/productPool.json");

function getProductPrice(n) {
  try {
    const product_price = data.price;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random product prices
    const randomProductPrice = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * product_price.length);
      randomProductPrice.push(product_price[randomIndex]);
    }

    return randomProductPrice;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getProductPrice };
