// start at 2:11 pm.

// take map properties, loop over them
// store them inside one object
// take each map, loop and compare with the big object
// if one comparison doesn't match for either map, that means we return false

export const mapsEqual = (a, b) => {
  const obj = {};

  const array = a.entries();

  console.log("array: ", array);

  array.forEach((element) => {
    console.log("element[0]", element[0]);

    obj[element[0]] = element[1];
  });

  console.log("object: ", obj);
};

let map = new Map();

map.set("a", 1);
map.set("b", 2);

mapsEqual(map);
