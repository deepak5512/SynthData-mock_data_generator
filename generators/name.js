const data = require("../data/namePool.json");

function getFirstNames(n) {
  try {
    const names = data.first_names;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random first names
    const randomFirstNames = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * names.length);
      randomFirstNames.push(names[randomIndex]);
    }

    return randomFirstNames;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

function getLastNames(n) {
  try {
    const names = data.last_names;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random last names
    const randomLastNames = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * names.length);
      randomLastNames.push(names[randomIndex]);
    }

    return randomLastNames;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

function getFullNames(n) {
  try {
    const { first_names, last_names } = data;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random full names
    const randomFullNames = [];
    for (let i = 0; i < n; i++) {
      const randomFirstIndex = Math.floor(Math.random() * first_names.length);
      const randomLastIndex = Math.floor(Math.random() * last_names.length);
      randomFullNames.push(
        `${first_names[randomFirstIndex]} ${last_names[randomLastIndex]}`
      );
    }

    return randomFullNames;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getFirstNames, getLastNames, getFullNames };
