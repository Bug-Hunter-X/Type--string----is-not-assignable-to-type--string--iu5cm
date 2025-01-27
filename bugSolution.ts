function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

let user = ["Jane User", "John Smith"];

for (const name of user) {
  console.log(greeter(name));
}

//Alternative solution using map function
console.log(user.map(name => greeter(name)));