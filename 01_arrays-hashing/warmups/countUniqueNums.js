// how many unique values

// approach
// turn input array into a set
// take set, return to an array
// return the length of the array

export const countUniqueNums = (inputArr) => {
  if (!inputArr) {
    return 0;
  }

  const set = new Set(inputArr);

  const uniqueElementsArr = [...set];

  return uniqueElementsArr.length;
};

// fin 1:35 pm.

/*
  nums is always an array of integers (may be negative, may repeat). It may be empty. It is never null/undefined, never contains non-numbers.
  str is always a string of lowercase letters a–z. It may be empty.
  Maps passed to mapsEqual always have string or number keys and number values. Either may be empty.
  You do not validate inputs. Anything outside this contract is out of scope.
*/
