// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter your project title',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Provide a short description explaining the what, why, and how of your project.',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the steps required to install your project?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Provide instructions and examples for how to use your project.',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'List the project collabarators and their GitHub links as well as any attribution required third-party assets and/or any tutorial links',
                name: 'credits',
            },
            {
                type: 'list',
                message: 'What license did you use for your project?',
                name: 'license',
                choices: ['Apache_2.0', 'GPL_3.0', 'MIT', 'BSD_2_Clause', 'BSD_3_Clause', 'Boost_1.0', 'CC0', 'EPL_2.0', 'AGPL_3.0', 'GPL_2.0', 'LGPL_2.1', 'MPL_2.0', 'Unlicense', 'none']
            },
            {
                type: 'input',
                message: 'Add ways to test your project and describe how to run these tests',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'What is your GitHub username? Including this will help if someone wants to checkout your work.',
                name: 'question1',
            },
            {
                type: 'input',
                message: 'Include a link to your GitHub for easier access',
                name: 'question2',
            },
            {
                type: 'input',
                message: 'What is your email? Including this will help if someone wants to get in contact with you.',
                name: 'question3',
            },
        ])
    // TODO: Create a function to write README file
        .then((response) => {
            let README = `
# ${response.title}

## Description

${response.description}

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## Credits

${response.credits}

## License

${response.license}

${generateMarkdown(response.license)}

## Tests

${response.tests}

## Questions?

Find me on GitHub at ${response.question1} or follow this link ${response.question2}

Contact me at ${response.question3}
`

            fs.writeFile(`README.md`, README, (err) =>
            err ? console.error(err) : console.log('success'))
        });

}

// Function call to initialize app
init();
