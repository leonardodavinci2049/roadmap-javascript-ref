// The let keyword allows you to declare a variable with block scope.
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

console.log(x);