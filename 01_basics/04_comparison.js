// console.log(2>1)
// console.log (2>=1)
// and more like these


// MOSTLY WE AVOID SUCH CONVERSIONS
console.log("2" > 1); // true
console.log("02" > 1); // true


console.log(null > 0); // F
console.log(null == 0); // F
console.log(null >= 0); // T

console.log(undefined == 0); // F
console.log(undefined > 0); // F
console.log(undefined < 0); // F

// === strict checking 
console.log("2" == 2);  // true
console.log("2" === 2); // false

