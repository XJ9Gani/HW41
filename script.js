// ДЗ1

Array.prototype.sum = function () {
  let sum = 0;
  for (let num of this) {
    sum += num;
  }
  return sum;
};

console.log([1, 2, 3, 4, 5].sum());

//ДЗ2

const Introduce = {
  sayHello() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`);
  },
};

function Person(name, age) {
  (this.name = name), (this.age = age);
}

let person1 = new Person("Gani", 21);
let person2 = new Person("Maksat", 22);
let person3 = new Person("Aisha", 23);

person1.__proto__ = Introduce;
person2.__proto__ = Introduce;
person3.__proto__ = Introduce;
person1.sayHello();
person2.sayHello();
person3.sayHello();
