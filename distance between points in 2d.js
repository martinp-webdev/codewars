function distanceBetweenPoints(a, b) {
  // unpack x/y coordinates from each point by using destructuring assignment
  const { x: x1, y: y1 } = a;
  const { x: x2, y: y2 } = b;
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}
