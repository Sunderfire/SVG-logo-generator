//Imports
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const {Circle, Triangle, Square} = require('./lib/shapes');
const {questions} = require('./lib/questions');

async function run() {
    const responses = await inquirer.prompt(questions)
console.log(responses)
let shape;
switch(responses.shape) {
    case "circle":
        shape = new Circle(responses.shapeColour)
        break;
    case "Circle":
        shape = new Circle(responses.shapeColour)
        break;
    case "triangle":
        shape = new Triangle(responses.shapeColour)
        break;
    case "Triangle":
        shape = new Triangle(responses.shapeColour)
        break;
    case "square":
        shape = new Square(responses.shapeColour)
        break;
    case "Square":
        shape = new Square(responses.shapeColour)
        break;
}
console.log(shape)
}

run();