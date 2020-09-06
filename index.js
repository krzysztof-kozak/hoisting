/* 
**** Hoisting var vs let/const ****

function hoist(){
  console.log(foo); // foo was moved up to the top of its scope but it was not assigned any value yet, so the default unefined value remains!
  
  console.log(bar); // bar was moved up to the top of its scope but it was not initialized it so we cannot access bar before initialization :(
 
  const bar = "Hoist me up, Scotty!" // const and let work the same in this example
  var foo = "Hoist me up, Scotty!"

}

hoist();
// var = hoisted, and declared, and initialized, but not assigned!
// const/let = hoisted, and declared, but NOT initialized and not assigned!

*/


/* **** Hoisting function declaration vs function expression ****

hoistFnDeclaration(); // The entire function is hoisted and we get the result we want:)

function hoistFnDeclaration() {
  console.log("Hoist me up, Scotty!")
}

hoistFnExpression(); // Only the variable is hoisted, and not the entire function. As we learned in the previous examples, variables declared with const/let are hoisted but are not initialized so we get an error cannot access ... before initialization.

const hoistFnExpression = function() {
  console.log("Hoist me up, Scotty!")
}

*/


/* **** Variable assignment (using var) priority over function assigment ****

var baz = 25;

function baz() {
  console.log('I\'m a function!')
}
console.log(typeof baz); // baz is a number because variable assignment takes priorit!


var abc;

function abc() {
  console.log('I\'m a function!')
}
console.log(typeof abc); // baz is a function because function declaration takes priority over variable declaration!


// We don't need to worry about these proiroties if we use const or let :)

const xyz = 5;
let asd;

function xyz() {
  console.log('I\'m a function!')
}

function asd() {
  console.log('I\'m a function!')
}

console.log(typeof abc); // Error: Identifier 'xyz' has already been declared
console.log(typeof asd); // Error: Identifier 'asd' has already been declared

*/


/* 
****  Hoisting: Classes ****
*/

const duck = new Animal('duck'); // Error: Cannot access Animal before initialization. This works the same as hoisting let and const variables; they get hoisted, and declared, but NOT initialized and not assigned!

class Animal { // We could use a class expression(  const Animal = class{...}  ) here to the same effect...
  constructor(species) {
    this.species = species;
  }
}
console.log(duck);

var duck2 = new Animal2('duck'); // Error: Animal2 is not a constructor This works the same as hoisting var variables; they get hoisted, and declared, and initialized and not assigned! They have the default 'undefined' value and as such the constructor and any other class-related things do not work :()

var Animal2 = class {
  constructor(species) {
    this.species = species;
  }
}
console.log(duck2);

