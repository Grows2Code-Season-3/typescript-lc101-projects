let myName: string = "LaunchCode";
let myNumber: number = 42;
let isComplete: boolean = true;

let names: string[] = ["Jack", "Jane", "Judy"];

function sayHello(name: string = "World"): void {
  console.log(`Hello, ${name}!`);
}

function reverse(str: string): string {
  return str.split('').reverse().join('');
}