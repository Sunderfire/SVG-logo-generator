const {Circle, Triangle, Square} = require('../lib/shapes');

describe('Circle', () => {
    test('should create an svg circle with inputed colour', () => {
        const test = new Circle("red");
        const testResult = test.render()
        const expectedResult = '<circle cx="25" cy="75" r="20" fill="red"/>'
        expect(testResult).toEqual(expectedResult);
    })
})