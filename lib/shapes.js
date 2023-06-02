class Shape {
    constructor(colour, text, textColour) {
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    }
    setColour(colour) {
        this.colour = colour;
    }
    setText(text) {
        this.text = text;
    }
    setTextColour(textColour) {
        this.textColour = textColour;
    }
}

class Circle extends Shape {
    constructor(colour, text, textColour) {
        super(colour, text, textColour)
    }
    render() {
        return `<svg version="1.1"
        width="300px" height="200px"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.colour}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`
    }
}

class Square extends Shape {
    constructor(colour, text, textColour) {
        super(colour, text, textColour)
    }
    render() {
        return `<svg version="1.1"
        width="300px" height="200px"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="150" height="150" fill="${this.colour}"/>
        <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`
    }
}
class Triangle extends Shape {
    constructor(colour, text, textColour) {
        super(colour, text, textColour)
    }
    render() {
        return `<svg version="1.1"
        width="300px" height="200px"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/>
        <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`
    }
}

module.exports = { Circle, Triangle, Square };
