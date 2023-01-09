const fs = require('fs');
const inquirer = require('inquirer');
const generateWebpage = require('./utils/generateWebpage');

function Team_manager(name, id, email, office_num) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office_num = office_num;
}

function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

}