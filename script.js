"use strict";

// OOP // 1
// Box Constractor Function
function Box(
  height = 100,
  width = 100,
  length = 100,
  material = "fabric",
  content = []
) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = content;
  Box.boxes.push(this);
}
Box.prototype.addBook = function (...books) {
  this.content.push(...books);
};
Box.prototype.count = function () {
  return this.content.length;
};
Box.prototype.deleteBook = function (title) {
  this.content.splice(
    this.content.findIndex(book => book.title === title),
    1
  );
};
Box.prototype.toString = function () {
  return `The box dimensions is (height: ${this.height}, width: ${this.width}, length: ${this.length})`;
};
Box.boxes = [];
Box.valueOf = function () {
  return Box.boxes.reduce(
    (accumulator, box) => accumulator + box.content.length,
    0
  );
};

// Book Constractor Function
function Book(title, author, numOfPages, numOfCopies) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.numOfCopies = numOfCopies;
  Book.numOfObjects++;
}
Book.numOfObjects = 0;
Book.getNumOfObjects = function () {
  return Book.numOfObjects;
};

// a)
const book1 = new Book("Javascript", "Abanoub", 150, 50);
const book2 = new Book("Javascript", "Abanoub Wadie", 100, 20);
const book3 = new Book("Swift", "Abanoub", 200, 50);
const book4 = new Book("Kotlin", "Abanoub Wadie", 200, 40);

const box1 = new Box();
const box2 = new Box();

box1.addBook(book1, book2);
box2.addBook(book3, book4);

// b)
console.log(`The count of books inside the box is: ${box1.count()}`);

// c)
box1.deleteBook("Javascript");

// d)
console.log(`the number of books created is ${Book.getNumOfObjects()}`);

// e)
console.log(box1.toString());

// f)
console.log(`the total number of books is ${Box.valueOf()}`);

// OOP // 2
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area = function () {
    return this.height * this.width;
  };

  toString = function () {
    return `the height = ${this.height}, the width = ${
      this.width
    } and the area = ${this.area()}`;
  };
}

class Square extends Polygon {
  constructor(height, width) {
    super(height, width);
  }
}
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
  }
}
class Circle extends Polygon {
  constructor(radius) {
    super(radius);
  }

  area = function () {
    return 2 * Math.PI * this.height;
  };

  toString = function () {
    return `the radius = ${this.height} and the area = ${this.area()}`;
  };
}
class Triangle extends Polygon {
  constructor(height, base) {
    super(height, base);
  }

  area = function () {
    return 0.5 * this.width * this.height;
  };

  toString = function () {
    return `the base = ${this.width}, the height = ${
      this.height
    } and the area = ${this.area()}`;
  };
}

const rectangle = new Rectangle(10, 20);
console.log(`rectangle: ${rectangle.toString()}`);

const square = new Square(10, 10);
console.log(`square: ${square.toString()}`);

const circle = new Circle(20);
console.log(`circle: ${circle.toString()}`);

const triangle = new Triangle(20, 30);
console.log(`triangle: ${triangle.toString()}`);

//OOP // 3
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(`x = ${x}`);
console.log(`y = ${y}`);

// Promises
function request(url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error("something went wrong");
    return response.json();
  });
}
request("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(`Response data: \n${data}`))
  .catch(error => console.log(`Error (reason: ${error.message})`));

// Questions
// 1- Promise
// 2- zero, empty string (""), False, undefined, null
// 3- primitives: number, string, boolean, undefined, null, bigInt, symbol
//    nonprimitives: object, array
// 4- Hoisting is the process where the interpreter move the declaration of functions, variables, classes, or imports to the top of their scope
// 5- var used to declare variables but didn't prevent declaring another variable with the same name - hoisted
//    let used to declare variables too but prevent declaring another variable with the same name - not hoisted
//    const is the same as let but the value stored in it is a constant (you can't reassign it) - not hoisted
// 6- function declaration - hoisted
//    function expression - not hoisted
//    arrow function - not hoisted
//    immediately invoked function expression (IIFE) - not hoisted
//    constractor function - hoisted
// 7- JS is sync, JS use callback queue to store callbacks untile the event loop decide when each callback will be executed and put it in call stack
// 8- deciding when each callback will be executed
// 9- == will check value equality between 2 varialbes but === will check data type equality too
// 10- NAN is not a number, of type number
// 11- scope is the current context of code which determines the accessibility of variables on the code, When looking for variables through the nested scope JavaScript search in the inner scope first and If the variable is not assigned locally then it will look at the outer scope untile the global scope if still not found it will throw a reference error
// 12- it allows inner functions to access the outer scope of a function and outer variables even if the outer function is terminated
// 13-
//    a) "Omar"
//    b) "21" - "111" - "111" - 0 - NAN - "1ss" - 10
//    c) undefined - ERROR - 20 - 10
//    d) ERROR - ERROR
