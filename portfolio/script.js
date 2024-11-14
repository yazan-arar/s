class student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

  getAverage(maxgrade) {
    let sum = 0;
    for (let i = 0; i < this.grade.length; i++) {
      if (this.grade[i] > maxgrade) {
        throw TypeError("One of the grades is more then 20");
      } 
      else
        sum += this.grade[i];
    }
    return sum / this.grade.length;
  }

  didsucceed(maxgrade){
    if(this.getAverage(maxgrade) < maxgrade/2)
      console.log("student failed");
    else
      console.log("student succeeded");
  }
}

let student1 = new student("Yazan", 19, [6, 5, 11]);

console.log("student1: ", student1);
student1.greet();
let avg = student1.getAverage(20);
console.log("avg: ", avg);
student1.didsucceed(20);
