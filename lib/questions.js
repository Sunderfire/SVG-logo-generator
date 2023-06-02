module.exports = {
    questions:[
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for your SVG logo'
        },
        {
            type: 'input',
            name: 'textColour',
            message: 'What colour would you like your text to be?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColour',
            message: 'What colour would you like the shape of your logo to be?'
        }, 
    ]
}