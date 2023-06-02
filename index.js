//Imports
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const {Circle, Triangle, Square} = require('./lib/shapes');
const {questions} = require('./lib/questions');

//Prompt User and Write SVG
async function run() {
    const responses = await inquirer.prompt(questions)
console.log(responses)
let shape;
switch(responses.shape) {
    case "Circle":
        shape = new Circle(
            responses.shapeColour,
            responses.text,
            responses.textColour)
        break;
    case "Triangle":
        shape = new Triangle(
            responses.shapeColour,
            responses.text,
            responses.textColour)
        break;
    case "Square":
        shape = new Square(
            responses.shapeColour,
            responses.text,
            responses.textColour)
        break;
}
const newSVG = shape.render()
await writeFile(join(__dirname, 'logo.svg'), newSVG);
console.info("Generated logo.svg")
}

run();