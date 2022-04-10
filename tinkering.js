//const amounts = [61.0, 52.25, 112.99, 5.0];

/*let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log("Order total is: ", total);

let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log("Order total is: ", total);

function laugh(num) {
  let sound = "ha";
  for (let num = [i]; i > 0; [i] --) {
      sound += sound;
  }
  return sound + "!";
}
console.log(laugh(3));

function sayHello() {
  var message = "Hello!";
  return message;
}
console.log(sayHello());

function buildTriangle(length) {
  let triangle = "";
  let lineNumber = 1;
  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

console.log(buildTriangle(3));
*/
function tryMe(param1, param2) {
  console.log(param1 + " and " + param2);
}
function callbackTester(callback) {
  callback();
}
callbackTester(function () {
  tryMe("hello", "goodbye");
});
