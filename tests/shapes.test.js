const {Circle, Triangle, Square} = require('../lib/shapes');

describe('Circle', () => {
    test('should create an svg circle with inputed colour and text', () => {
        const test = new Circle("red", "Moo", "green");
        const testResult = test.render();
        const expectedResult = '<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="150" cy="100" r="80" fill="red"/>' +
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">Moo</text>' +
        '</svg>';
        expect(testResult.replace(/\s/g, "")).toMatch(expectedResult.replace(/\s/g, ""));
    })
})

describe('Square', () => {
    test('should create an svg square with inputed colour and text', () => {
        const test = new Square("red", "Moo", "green");
        const testResult = test.render();
        const expectedResult = '<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="75" y="25" width="150" height="150" fill="red"/>' +
        '<text x="150" y="125" font-size="80" text-anchor="middle" fill="green">Moo</text>' +
        '</svg>';
        expect(testResult.replace(/\s/g, "")).toMatch(expectedResult.replace(/\s/g, ""));
    })
})

describe('Triangle', () => {
    test('should create an svg triangle with inputed colour and text', () => {
        const test = new Triangle("red", "Moo", "green");
        const testResult = test.render();
        const expectedResult = '<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="150, 18 244, 182 56, 182" fill="red"/>' +
        '<text x="150" y="125" font-size="80" text-anchor="middle" fill="green">Moo</text>' +
        '</svg>';
        expect(testResult.replace(/\s/g, "")).toMatch(expectedResult.replace(/\s/g, ""));
    })
})