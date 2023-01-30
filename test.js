let name1 = "daniel";

const students = [
  {
    name: name1,
    age: 23,
    isRemote: true,
    stack: ["React", "Nodejs", "HTML"],
    address: {
      city: "Balneário Camboriú",
    },
    changeName: function () {
      // declaring a function inside of an object, can be access like students[0].changeName()
      this.name = "banana";
    },
  },
  {
    name: "Mackenzie",
    age: 21,
    isRemote: true,
    stack: ["React", "Nodejs", "HTML"],
    address: {
      city: "Miami Shore",
    },
    printName: function () {
      return this.name;
    },
  },
];

console.log(students.length);

// length starts at 0 and it tell you the length of what you're pointing to

//but if we want to access a specific index from the array, we start at 0
// [] access index from array
// .name or .someProperty access a specific property from an object AKA: dot notation

console.log(students[0].name); //output "daniel"

console.log(students[0].stack[0]); // output React

console.log(students[1].address.city); // output Miami Shore

console.log(students[0].name); // output daniel

students[0].changeName(); // function that changes the object name to banana

console.log(students[0].name); //output banana

students[0].name = "daniel"; // hard coding changing the name

// students = "daniel"; // ERRORR you can't do this, assignment to constant variable

console.log(students[0].name); // output daniel, back to normal

function printName(obj) {
  console.log(obj.name, "💻");
}

printName(students[1]);
