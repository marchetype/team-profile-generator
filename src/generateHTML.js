const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const html = [];

const generateManager = manager => {
    let managerHtml = `
    <div id = "card">
        <div class = "card-name">${manager.name} - Manager</div>
        <div class = "card-id">Employee ID: ${manager.id}</div>
        <div class = "card-email">Email: <a target = '_blank' href = 'mailto:${manager.email}'>${manager.email}</a></div>
        <div class = "card-office">Office number: ${manager.office_num}</div>
    </div>
    `
    html.push(managerHtml);
}

const generateEngineer = engineer => {
    let engineerHtml = `
    <div id = "card">
        <div class = "card-name">${engineer.name} - Engineer</div>
        <div class = "card-id">Employee ID: ${engineer.id}</div>
        <div class = "card-email">Email: <a target = '_blank' href = 'mailto:${engineer.email}'>${engineer.email}</a></div>
        <div class = "card-github">Github:<a target = '_blank' href = 'https://github.com/${engineer.github}'>${engineer.github}</a></div>
    </div>
    `
    html.push(engineerHtml);
}

const generateIntern = intern => {
    let internHtml = `
    <div id = "card">
        <div class = "card-name">${intern.name} - Intern</div>
        <div class = "card-id">Employee ID: ${intern.id}</div>
        <div class = "card-email">Email: <a target = '_blank' href = 'mailto:${intern.email}'>${intern.email}</a></div>
        <div class = "card-office">School: ${intern.school}</div>
    </div>
    `
    html.push(internHtml);
}


const generateTeam = (team) => {
    console.log(team);
    for (let i = 0; i < team.length; i++) {
        console.log(team[i].getRole());
        switch (team[i].getRole()) {
            case 'Manager':
                generateManager(team[i]);
                break;
            case 'Engineer':
                generateEngineer(team[i]);
                break;
            case 'Intern':
                generateIntern(team[i]);
                break;
        }
    }

    console.log(html);
    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en-us">
    
        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" type="text/css" href="./style.css"/>
        </head>
    
        <body>
            <header id = "title">
            My Team
            </header>
    
            <main>${generateTeam(team)}</main>
    
        </body>
    
    </html>
    
        `
}