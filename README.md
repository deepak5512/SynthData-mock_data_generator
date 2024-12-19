
![Alt Text](https://raw.githubusercontent.com/deepak5512/SynthData-mock_data_generator/refs/heads/main/assets/synthdata%20logo.png)

**Versatile mock data generation for testing and prototyping.**
# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Philosophy](#philosophy)
- [Contributing to SynthData](#contributing-to-synthdata)
## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with the [npm init command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the [`npm install` command](https://docs.npmjs.com/downloading-and-installing-packages-locally):

```
$ npm install synthdata
```
## Usage

```javascript
const Generator = require("synthdata")
const generator = new Generator();

const n = 5;

console.log(generator.generateCustomData(n, {
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
    productName: true,
}));
```
## Available Functions and Parameters

This clearly indicates that the section describes the available functions in the package along with their parameters.

| **Function**                                | **Description**                                                       | **Parameters**                                                                                                          |
|---------------------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `generateCustomData(n, options)`            | Generates custom data based on the specified options.                | `n` (integer): The number of data entries to generate.<br> `options` (object): Customization options such as data. |
| `generateEcommerceData(n)`                  | Generates mock e-commerce data, including orders and product details. | `n` (integer): The number of e-commerce data entries (e.g., orders, products) to generate.                                |
| `generateProfileData(n)`                    | Generates random user profile data, including names, emails, etc.    | `n` (integer): The number of profiles to generate.                                                                      |
| `generateStudentData(n)`                    | Generates student-related data such as names, IDs, and courses.      | `n` (integer): The number of student data entries to generate.                                                          |
| `generateNormalPoints(n, d, mean, variance)`| Generates `n` random data points in `d` dimensions following a normal distribution with specified mean and variance. | `n` (integer): The number of data points to generate.<br> `d` (integer): The number of dimensions for each data point.<br> `mean` (number): The mean value for the normal distribution.<br> `variance` (number): The variance for the normal distribution. |
| `generateUniformPoints(n, d, mean, variance)`| Generates `n` random data points in `d` dimensions following a uniform distribution with specified mean and variance. | `n` (integer): The number of data points to generate.<br> `d` (integer): The number of dimensions for each data point.<br> `mean` (number): The mean value for the uniform distribution.<br> `variance` (number): The variance for the uniform distribution. |

### Options for `generateCustomData` Function

The `options` parameter for the `generateCustomData` function can include the following properties:

- **firstName** (boolean): Generate random first names.
- **lastName** (boolean): Generate random last names.
- **fullName** (boolean): Generate random full names (first and last names).
- **address** (boolean): Generate random addresses.
- **numericalId** (boolean): Generate random numerical IDs.
- **alphaNumericalId** (boolean): Generate random alphanumeric IDs.
- **phoneNumber** (boolean): Generate random phone numbers.
- **email** (boolean): Generate random email addresses.
- **productName** (boolean): Generate random product names.
- **productDescription** (boolean): Generate random product descriptions.
- **productPrice** (boolean): Generate random product prices.

#### Example Usage

```javascript
generator.generateCustomData(10, {
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
    productName: true,
});
```
## Features

- Random Data Generation
- Structured Data Creation
- Seamless Integration
- Customizable Numeric Data
## Contributing to SynthData

- [DeepakBhatter](https://github.com/deepak5512) - Deepak Bhatter 