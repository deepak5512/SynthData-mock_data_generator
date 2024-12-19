function generateNormalPoints(n, d, mean, variance) {
  if (n <= 0 || d <= 0 || variance <= 0) {
    throw new Error("'n', 'd', and 'variance' must be positive numbers.");
  }

  const points = [];
  const stddev = Math.sqrt(variance); // Standard deviation is the square root of variance

  // Helper function to generate a single normal random value using Box-Muller transform
  function generateNormalRandomValue(mean, stddev) {
    let u1 = 0,
      u2 = 0;
    while (u1 === 0) u1 = Math.random(); // Convert [0,1) to (0,1)
    while (u2 === 0) u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stddev + mean;
  }

  // Generate points
  for (let i = 0; i < n; i++) {
    const point = [];
    for (let j = 0; j < d; j++) {
      const value = generateNormalRandomValue(mean, stddev);
      point.push(value);
    }
    points.push(point);
  }

  return points;
}

module.exports = { generateNormalPoints };
