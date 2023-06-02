class Shape {
    constructor(colour) {
        this.colour = colour;
    }
    setcolour(colour) {
        this.colour = colour;
    }
}

class Circle extends Shape {
    constructor(colour) {
        super(colour)
    }
   render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.colour}"/>`
   }
}

class Square extends Shape {
    constructor(colour) {
        super(colour)
    }
    render() {
        return `<rect x="30" y="30" width="30" height="30" fill=${this.colour}"/>`
    }
}
class Triangle extends Shape {
    constructor(colour) {
        super(colour)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/>`
    }
}

module.exports = {Circle, Triangle, Square};
