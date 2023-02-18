function cubeChecker(volume, side) {
  // Check for invalid input
  if (volume <= 0 || side <= 0) {
    return false;
  }

  // Calculate the length, width, and height of the cuboid
  const length = volume / (side * side);
  const width = volume / (side * length);
  const height = volume / (length * width);

  // Check if all three values are approximately equal
  const tolerance = 0.0001;
  return Math.abs(length - width) < tolerance && Math.abs(width - height) < tolerance;
}
