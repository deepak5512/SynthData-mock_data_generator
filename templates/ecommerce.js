const { getAlphaNumericalId } = require("../generators/id");
const productData = require("../data/productPool.json");

function generateEcommerceData(n) {
  const { product_name, product_description, price } = productData;

  const result = [];

  for (let i = 0; i < n; i++) {
    const productId = getAlphaNumericalId(1)[0];

    const randomIndex = Math.floor(Math.random() * product_name.length);

    result.push({
      product_id: productId,
      product_name: product_name[randomIndex],
      product_description: product_description[randomIndex],
      product_price: price[randomIndex],
    });
  }

  return result;
}

module.exports = { generateEcommerceData };
