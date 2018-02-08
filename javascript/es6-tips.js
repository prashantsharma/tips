//Destructuring - ES6
let [a, b, c] = [1, 2, 3];
console.log(`a = ${a}, b = ${b}, c = ${c}`);

function foo() {
  return ["Prashant", "Sharma"];
}

let [d, e] = foo();
console.log(`Your name is ${d} ${e}.`);

let { firstName, lastName } = { firstName: "Prashant", lastName: "Sharma" };
console.log(`${firstName} ${lastName}`);

let { x: var1, x: var2, y: var3 } = { x: 1, y: 2 }; //assign value to multiple variables
console.log(var1, var2, var3);

//Dynamic Object Property Names
let framework = "Angular-";
let my_Obj = {
  [framework + 'version']: 5
}
console.log(my_Obj);


