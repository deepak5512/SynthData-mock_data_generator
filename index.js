// Importing functions
const { generateCustomData } = require("./templates/customData");
const { generateEcommerceData } = require("./templates/ecommerce");
const { generateProfileData } = require("./templates/profile");
const { generateStudentData } = require("./templates/student");
const { generateUniformPoints } = require("./generators/uniformDistrbution");
const { generateNormalPoints } = require("./generators/normalDistribution");

// Class to integrate all generators
class Generator {
  generateCustomData(n, options) {
    return generateCustomData(n, options);
  }

  generateEcommerceData(n) {
    return generateEcommerceData(n);
  }

  generateProfileData(n) {
    return generateProfileData(n);
  }

  generateStudentData(n) {
    return generateStudentData(n);
  }

  generateNormalPoints(n, d, mean, variance) {
    return generateNormalPoints(n, d, mean, variance);
  }

  generateUniformPoints(n, d, mean, variance) {
    return generateUniformPoints(n, d, mean, variance);
  }
}

// Exporting the class for usage
module.exports = Generator;
