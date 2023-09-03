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
        
//         const square = new Square();
        square.setColor('blue');
        const svg = square.render();
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
