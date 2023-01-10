const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, office_num) {
        super(name, id, email);
        this.office_num = office_num;
    }
    getOfficeNum() {
        return this.office_num;
    }
    getPosition() {
        return 'Manager';
    }
}

module.exports = Manager;