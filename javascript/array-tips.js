//Check if array or not

let arr = ["a", "b", "c", "d"];
console.log(arr instanceof Array);

//Loop array in ES6
for (let item of arr) {
  console.log(item);
}

//Loop array in before ES6
for (let idx in arr) {
  console.log(idx);
  console.log(arr[idx]);
}
