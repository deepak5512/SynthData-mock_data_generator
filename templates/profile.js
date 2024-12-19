const { getFirstNames, getLastNames } = require("../generators/name");
const { getAddress } = require("../generators/address");
const { getNumericalId } = require("../generators/id");
const { getPhoneNumbers } = require("../generators/phoneNumber");
const { getEmails } = require("../generators/email");

function generateProfileData(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const numericId = getNumericalId(1)[0];
    const firstName = getFirstNames(1)[0];
    const lastName = getLastNames(1)[0];
    const email = getEmails(1)[0];
    const address = getAddress(1)[0];
    const phoneNumber = getPhoneNumbers(1)[0];

    result.push({
      numeric_id: numericId,
      first_name: firstName,
      last_name: lastName,
      email: email,
      address: address,
      phone_number: phoneNumber,
    });
  }

  return result;
}

module.exports = { generateProfileData };
