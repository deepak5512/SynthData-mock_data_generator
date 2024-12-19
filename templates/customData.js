const {
  getFirstNames,
  getLastNames,
  getFullNames,
} = require("../generators/name");
const { getAddress } = require("../generators/address");
const { getNumericalId, getAlphaNumericalId } = require("../generators/id");
const { getPhoneNumbers } = require("../generators/phoneNumber");
const { getEmails } = require("../generators/email");
const { getProductNames } = require("../generators/productName");
const { getProductDescription } = require("../generators/productDescription");
const { getProductPrice } = require("../generators/productPrice");

function generateCustomData(n, options) {
  const result = [];
  const generators = {
    firstName: getFirstNames(n),
    lastName: getLastNames(n),
    fullName: getFullNames(n),
    address: getAddress(n),
    numericalId: getNumericalId(n),
    alphaNumericalId: getAlphaNumericalId(n),
    phoneNumber: getPhoneNumbers(n),
    email: getEmails(n),
    productName: getProductNames(n),
    productDescription: getProductDescription(n),
    productPrice: getProductPrice(n),
  };

  // Ensure all generators are fetched before processing
  const optionKeys = Object.keys(options);
  const dataMap = optionKeys.reduce((acc, key) => {
    if (generators[key]) acc[key] = generators[key]; // Populate the data for requested fields
    return acc;
  }, {});

  // Create the array of objects
  for (let i = 0; i < n; i++) {
    const obj = {};
    for (const key of optionKeys) {
      obj[key] = dataMap[key] ? dataMap[key][i] : null;
    }
    result.push(obj);
  }

  return result;
}

module.exports = { generateCustomData };
