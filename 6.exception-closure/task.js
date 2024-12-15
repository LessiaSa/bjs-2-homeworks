﻿function parseCount(num) {
    let number = Number.parseFloat(num);
    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

//console.log(parseCount("jdfhgsudh"));
//console.log(parseCount("012"));
//console.log(parseCount("56.65"));

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (error) {
        return error;
    } 
}
validateCount("djshf");
//console.log(validateCount("1254"));

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) ||((b + c) < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
    }
    get perimeter() {
        return  +(this.a + this.b + this.c);
    }
    get area() {
        const p = this.perimeter / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
   
}
const triangle = new Triangle(6,10,15);
console.log(triangle.perimeter);
console.log(triangle.area);
const triangle1 = new Triangle(1,3,100);

function getTriangle(a, b, c) {
    a = parseCount(a);
    b = parseCount(b);
    c = parseCount(c);
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    } 
}
console.log(getTriangle(2,3,4));
console.log(getTriangle(1,300,10));
console.log(getTriangle("hdsfh", 12, 17));
console.log(getTriangle("15", 14, 18));