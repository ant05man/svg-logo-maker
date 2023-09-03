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
        message: 'Enter a color for your shape(or hexadecimal number):',
    },
    {
        type: 'input',
        name: 'choose-shape',
        message: 'Choose which Shape you would like:',
        choices: ["Circle","Square","Triangle"],
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

const answers = inquirer.prompt(questions);

var user_text ='';
if (answers.text.length > 0 && answers.text.length > 4) 
{
    user_text =answers.text;
} else {
    console.log("Invalid text please enter 1-3 characters")

    return;
}
console.log(`User Text: ${user_text}`);

//font color
user_font_color = answers['text-color'];
console.log(`User font color: ${user_font_color}`)

//shape color
user_shape_color = answers['shape'];
console.log(`Your shape color is:${user_shape_color}`)

//shape type
user_shape_type = answer['choose-shape'];
console.log(`Your shape chosen is:${user_shape_type}`)

