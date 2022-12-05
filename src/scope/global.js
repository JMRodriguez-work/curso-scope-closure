// variables

var a; //declarando
var b = 'b'; //declarando y asignando
b = 'bb'; //reasignación
var a = 'aa'; //redeclaración

//Global Scope

var fruit = 'apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //se declara de manera global
    console.log(country);
}

countries();
console.log(country);
