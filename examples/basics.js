var myName = "LaunchCode";
var myNumber = 42;
var isComplete = true;
var names = ["Jack", "Jane", "Judy"];
function sayHello(name) {
    if (name === void 0) { name = "World"; }
    console.log("Hello, ".concat(name, "!"));
}
function reverse(str) {
    return str.split('').reverse().join('');
}
var someVar;
someVar = reverse("LaunchCode");
