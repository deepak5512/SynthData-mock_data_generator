const data = require("../data/productPool.json");

function getProductNames(n) {
  try {
    const product_names = data.product_name;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random product names
    const randomProductNames = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * product_names.length);
      randomProductNames.push(product_names[randomIndex]);
    }

    return randomProductNames;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getProductNames };
