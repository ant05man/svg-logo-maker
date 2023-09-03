const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    it('should render a valid SVG circle', () => {
        const circle = new Circle();
        circle.setColor('red');
        const svg = circle.render();
        expect(svg).toMatch(/<circle.*<\/circle>/);
    });
});
// jest function used to group related test cases together.
// Creating a test suite for 'square' class
describe('Square', () => {
// description of what test case is checking
    it('should render a valid SVG square', () => {
        
        //creates new instance of 'Square' class
        const square = new Square();
        //setting color of the square to blue
        square.setColor('blue');
        //call the 'render' method of 'square' object' should generate svg display of a square w/the color
        const svg = square.render();
        //checks if svg variable matches expression '/<rect.*</rect>/
        //checking if svg has valid '<rect>' element
        // If test passes, that means 'Square' class is working as expected
        expect(svg).toMatch(/<rect.*<\/rect>/);
    });
});

describe('Triangle', () => {
    it('should render a valid SVG triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        const svg = triangle.render();
        expect(svg).toMatch(/<polygon.*<\/polygon>/);
    });
});
