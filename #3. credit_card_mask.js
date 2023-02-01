function maskify(str) {
  if (str.length > 4) {
    // Replace all characters except last 4 with #
    // Number of chars to be masked is the length of string minus 4
    // Mask everything except last 4, then slice the last 4 back in
    return "#".repeat(str.length - 4) + str.slice(-4);
  } else {
    return str;
  }
}
