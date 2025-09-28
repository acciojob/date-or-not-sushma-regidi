function isDate(input) {
  // Case 1: Input is already a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Case 2: Input is a string or number → try to parse
  if (typeof input === "string" || typeof input === "number") {
    let date = new Date(input);
    return !isNaN(date.getTime());
  }

  // Otherwise, not a date
  return false;
}

