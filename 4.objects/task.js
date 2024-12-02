function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
let student3 = new Student("Саша", "мужской", 18);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;  
}

Student.prototype.addMarks = function (...marks) {
    this.marks === undefined ? this.marks = marks : this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty(`marks`) === false || this.marks.length === 0) {
        return 0;
    }
    const averageValue = this.marks.reduce((acc, mark, index, arr) => {
        acc += mark;
        if (index === arr.length -1) {
            return acc / arr.length;
        }
        return acc;
    }, 0);
    return averageValue;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
//{name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
student3.addMarks();
console.log(student3.getAverage());
console.log(student3);