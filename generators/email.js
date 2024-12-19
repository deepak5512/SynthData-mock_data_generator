const data = require("../data/emailPool.json");

function getEmails(n) {
  try {
    const emails = data.emails;

    // Validate input
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 1000) {
      throw new Error("Input must be an integer between 1 and 1000.");
    }

    // Generate random emails
    const randomEmails = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * emails.length);
      randomEmails.push(emails[randomIndex]);
    }

    return randomEmails;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

module.exports = { getEmails };
