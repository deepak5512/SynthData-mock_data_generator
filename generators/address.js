const data = require("../data/addressPool.json");

function getAddress(n) {
  try {
    const address = data.addresses;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random addresses
    const randomAddresses = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * address.length);
      randomAddresses.push(address[randomIndex]);
    }

    return randomAddresses;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getAddress };
