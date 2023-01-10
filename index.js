const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const path = require('path');
const inquirer = require('inquirer');
const destinationDir = path.resolve(__dirname, "dist");
const destinationPath = path.resolve(destinationDir, "generated.html");

let team = [];

const finalizeLayout = () => {
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir)
    }
    fs.writeFileSync(destinationPath, generateHTML(team), "utf-8");
}

const internInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please input the intern's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('No name entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please input the intern's employee ID: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('No ID entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input the intern's email address: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('No email entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please input the intern's school: ",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('No school entered. Please try again!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        teamPrompt();
    })
}

const engineerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please input the engineer's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('No name entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please input the engineer's employee ID: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('No ID entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input the engineer's email address: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('No email entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please input the engineer's GitHub account: ",
            validate: acctInput => {
                if (acctInput) {
                    return true;
                } else {
                    console.log('No GitHub account entered. Please try again!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        team.push(engineer);
        teamPrompt();
    })
}

const teamPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextMember',
            message: 'Which team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then(input => {
        switch (input.nextMember) {
            case 'Engineer':
                engineerInput();
                break;
            case 'Intern':
                internInput();
                break;
            default:
                finalizeLayout();

        }
    })
}

const managerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please input your name: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('No name entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please input your employee ID: ',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('No ID entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input your email address: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('No email entered. Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please input your office number: ',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('No office number entered. Please try again!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        team.push(manager);
        teamPrompt();
    })
}

managerInput();
