// approach
// take input array to transform into a Map
// In order to do that, keep track of elements going inside it
// Loop over inputArr, feeding into a new Map() with each element having a counter attached as its value
// key = element, value = count of times element appears
// return map when done

// 1:40
export const charFrequency = (str) => {
  if (!str) {
    return new Map();
  }

  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  return map;
};

//   2:01 pm finished
