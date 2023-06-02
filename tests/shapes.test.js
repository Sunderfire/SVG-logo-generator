const {Circle, Triangle, Square} = require('../lib/shapes');

describe('Circle', () => {
    test('should create an svg circle with inputed colour', () => {
        const test = new Circle("red", "Moo", "green");
        const testResult = test.render();
        const expectedResult = '<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="150" cy="100" r="80" fill="red"/>' +
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">Moo</text>' +
        '</svg>';
        expect(testResult.replace(/\s/g, "")).toMatch(expectedResult.replace(/\s/g, ""));
    })
})