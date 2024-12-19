function generateUniformPoints(n, d, mean, variance) {
  if (n <= 0 || d <= 0 || variance <= 0) {
    throw new Error("'n', 'd', and 'variance' must be positive numbers.");
  }

  const points = [];

  // Compute the range for the uniform distribution
  const halfRange = Math.sqrt(3 * variance); // Derived from uniform distribution properties
  const min = mean - halfRange;
  const max = mean + halfRange;

  // Generate points
  for (let i = 0; i < n; i++) {
    const point = [];
    for (let j = 0; j < d; j++) {
      const value = Math.random() * (max - min) + min; // Generate random value in range [min, max]
      point.push(value);
    }
    points.push(point);
  }

  return points;
}

module.exports = { generateUniformPoints };
