// approach
// take input array to transform into a Map
// In order to do that, keep track of elements going inside it
// Loop over inputArr, feeding into a new Map() with each element having a counter attached as its value
// key = element, value = count of times element appears
// return map when done

// 1:40
export const charFrequency = (inputArr) => {
  if (!inputArr) {
    return new Map();
  }

  const map = new Map();
  let count = 1;

  for (let i = 0; i < inputArr.length; i++) {
    if (map.has(inputArr[i])) {
      map.set(inputArr[i], map.get(inputArr[i]) + 1);
    } else {
      map.set(inputArr[i], count);
    }
  }

  return map;
};

//   2:01 pm finished
