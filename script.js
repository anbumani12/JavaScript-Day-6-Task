//Q1.Class - Movie convert typescript to oops

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var Movie1 = new Movie("Casino Royale", "Eon Productions");
var Movie2 = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(Movie1.title);
console.log(Movie1.studio);
console.log(Movie1.rating);
console.log(Movie2.title);
console.log(Movie2.studio);
console.log(Movie2.rating);

//Q2.Convert the UML diagram to Typescript class. - use number for double

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radiusCircle() {
    return this.radius;
  }
  set radiusCircle(radius) {
    this.radius = radius;
  }
  get colorCircle() {
    return this.color;
  }
  set colorCircle(color) {
    this.color = color;
  }
  get toString() {
    return '"Circle[radius=${this.radius},color=${this.color}]"';
  }
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle() {
    return 2 * Math.PI * this.radius;
  }
}
var obj1 = new Circle(1.0, "red");
console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.0;
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "green";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);

//Q3.Write a “person” class to hold all the details.

class Person {
  constructor(name, age, gender, salary, email, phone) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.salary = salary;
    this.email = email;
    this.phone = phone;
  }
}
var person1 = new Person(
  "anbu",
  21,
  "male",
  50000,
  "anbu@123gmail.com",
  9361589969
);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.salary);
console.log(person1.email);
console.log(person1.phone);

//Q4.Write a class to calculate the Uber price.

class Uber {
  constructor(Price = 50) {
    this.price = Price * 50;
  }
  setPrice(n) {
    this.price = n * 50;
  }
  getPrice() {
    return this.price;
  }
}
var Uber1 = new Uber(5);
console.log(Uber1.price);
