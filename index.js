const fs = require('fs')
const inquirer = require('inquirer');
const {Circle,Square,Triangle} = require('./lib/shapes.js');

class svg {
   constructor() {
    this.textElement = ''
    this.shapeElement = ''
   }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color) {
        this.textElement = `<text x='150' y='125' font-size='60' text-anchor='middle' fill=${color}'>${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter a color for font(or hexadecimal number):',

    },
    {
        type: 'input',
        name: 'shape',
        message: 'Choose which Shape you would like:',
        choices: ["Circle","Square","Triange"],
    },
];

function writeToFile(fileName, data) {
	console.log(`Writing ${data} to file ${fileName}`)
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}