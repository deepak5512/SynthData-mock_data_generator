const { getFirstNames, getLastNames } = require("../generators/name");
const { getAddress } = require("../generators/address");
const { getAlphaNumericalId } = require("../generators/id");
const { getEmails } = require("../generators/email");

function generateStudentData(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const numericId = getAlphaNumericalId(1)[0];
    const firstName = getFirstNames(1)[0];
    const lastName = getLastNames(1)[0];
    const email = getEmails(1)[0];
    const address = getAddress(1)[0];

    result.push({
      numeric_id: numericId,
      first_name: firstName,
      last_name: lastName,
      email: email,
      address: address,
    });
  }

  return result;
}

module.exports = { generateStudentData };
