// starts at 10:14 pm

export const mapsEqual = (a, b) => {
  if (a.size !== b.size) {
    return false;
  }

  a.forEach((value, key) => {
    console.log("map a key: ", key);
    console.log("map a value: ", value);
    console.log("map b.has() key: ", b.has(key));
    console.log("map b.get() val: ", b.get(key));
    console.log("b.has(key): ", b.has(key));
    console.log("(b.get(key) !== value)", b.get(key) !== value);
    if (b.has(key) === false) {
      return false;
    }
    if (b.get(key) !== value) {
      console.log("should hit this");
      return false;
    }
  });

  return true;
};

// end at 10:39
