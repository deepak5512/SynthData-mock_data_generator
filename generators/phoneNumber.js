const data = require("../data/phoneNumberPool.json");

function getPhoneNumbers(n) {
  try {
    const numbers = data.phone_numbers;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random phone numbers
    const randomPhoneNumbers = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      randomPhoneNumbers.push(numbers[randomIndex]);
    }

    return randomPhoneNumbers;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getPhoneNumbers };
