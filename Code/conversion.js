let score = "33a"

console.log(typeof(score));

let value= Number(score);

console.log(typeof(value));
console.log(value);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let login = 1
let loginboolean = Boolean(login)
console.log(loginboolean);

let emptystring = ""
let emptstr = Boolean(emptystring)
console.log(emptstr);

let normalString = "Ritik"
let normalStringboolean = Boolean(normalString)
console.log(normalStringboolean);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);