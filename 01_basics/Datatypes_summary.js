// Primitve ( call by value )
// 7 types : String , Booolean , Number , Symbol , Undefined, BigInt, null

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Non primitive (call by reference)
// Array , objects, functions
// non primitice ke return type humesha "OBJECT" hi ata h

// JAVASCRIPT is a dynamically typed language --> variable types are not explicitly declared; instead type is determined at runtime based on the value assigned to the var.

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);