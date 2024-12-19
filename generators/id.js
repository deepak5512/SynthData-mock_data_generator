const data = require("../data/idPool.json");

function getNumericalId(n) {
  try {
    const numericalId = data.numerical_id;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random numerical ID
    const randomNumericalId = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * numericalId.length);
      randomNumericalId.push(numericalId[randomIndex]);
    }

    return randomNumericalId;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

function getAlphaNumericalId(n) {
  try {
    const alphaNumericalId = data.alphaNumerical_id;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random alpha numerical ID
    const randomAlphaNumericalId = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * alphaNumericalId.length);
      randomAlphaNumericalId.push(alphaNumericalId[randomIndex]);
    }

    return randomAlphaNumericalId;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getNumericalId, getAlphaNumericalId };
