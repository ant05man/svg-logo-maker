const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');


class Svg { 
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        console.log(`Setting text: ${text}, color: ${color}`);
        this.textElement = `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>`;

    }
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

//questions for input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for font (or hexadecimal number):',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your shape (or hexadecimal number):',
    },
    {
        type: 'list',
        name: 'chooseShape',
        message: 'Choose which Shape you would like:',
        choices: ["Circle", "Square", "Triangle"],
    },
];


function writeToFile(fileName, data) {
    console.log(`Writing to file ${fileName}`);
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have generated a logo.svg!"); 
    });
}

async function init() {
    console.log("Starting init");
    var svgString = "";
    var svgFile = "logo.svg"; 

    try {
    // To make asynchronous
    const answers = await inquirer.prompt(questions);

    var userText = '';
    if (answers.text.length > 0 && answers.text.length <= 3) {
        userText = answers.text;
    } else {
        console.log("Invalid text. Please enter 1-3 characters");
        return;
    }
    console.log(`User Text: ${userText}`);

    // Font color
    const userFontColor = answers.textColor;
    console.log(`User font color: ${userFontColor}`);
    // Shape color
    const userShapeColor = answers.shapeColor;
    console.log(`Your shape color is: ${userShapeColor}`);

    // Shape type
    const userShapeType = answers.chooseShape.toLowerCase(); // Convert to lowercase
    console.log(`Your shape chosen is: ${userShapeType}`);

    // User shape selection
    let userShape;
    if (userShapeType === "square") {
        userShape = new Square();
        console.log("Your selected shape is: Square");
    }
    else if (userShapeType === "circle") {
        userShape = new Circle();
        console.log("Your selected shape is: Circle");
    }
    else if (userShapeType === "triangle") {
        userShape = new Triangle();
        console.log("Your selected shape is: Triangle");
    }
    else {
        console.log("Invalid shape!");
        return;
    }
    userShape.setColor(userShapeColor);

    // Create a new Svg instance and add the shape and text elements to it
    const svg = new Svg();
    svg.setTextElement(userText, userFontColor);
    svg.setShapeElement(userShape);
    svgString = svg.render();

    // Print shape to log
    console.log("Displaying shape:\n\n" + svgString);

    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svgFile, svgString);
}catch (error) {
    console.error("There is an Error",error);
}    
}

init();
