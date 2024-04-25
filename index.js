// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = 
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
            message: '',
            name: 'table of contents',
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
            type: 'input',
            message: 'What license did you use for your project?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BDS 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            message: 'Add ways to test your project and describe how to run these tests',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'idk what to put for this',
            name: 'questions',
        },
    ])
    .then((response) => {
        let README = `
        # ${response.title}

        ## Description:
        
        > ${response.description}

        `
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
