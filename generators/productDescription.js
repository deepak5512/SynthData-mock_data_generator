const data = require("../data/productPool.json");

function getProductDescription(n) {
  try {
    const product_description = data.product_description;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random product description
    const randomProductDescription = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(
        Math.random() * product_description.length
      );
      randomProductDescription.push(product_description[randomIndex]);
    }

    return randomProductDescription;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getProductDescription };
