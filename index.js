// hoisting

function hoist(){
  console.log(foo); // foo was moved up to the top of its scope but it was not assigned any value yet, so the default unefined value remains!
  
  console.log(bar); // bar was moved up to the top of its scope but it was not initialized it so we cannot access bar before initialization :(
 
  const bar = "Hoist me up, Scotty!" // const and let work the same in this example
  var foo = "Hoist me up, Scotty!"

}

hoist();

// var = hoisted, and declared, and initialized, but not assigned!
// const/let = hoisted, and declared, but NOT initialized and not assigned!