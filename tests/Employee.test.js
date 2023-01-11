const Employee = require('../lib/Employee');
const employee = new Employee('Mark','2222', 'markbarstowjr@gmail.com');

test('Testing to obtain values from object', () => {
    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe('2222');
    expect(employee.email).toBe('markbarstowjr@gmail.com');
});

test('Testing getName() functionality. Should return the name of the employee', () => {
    expect(employee.getName()).toBe('Mark');
});

test('Testing getId() functionality. Should return the ID of the employee', () => {
    expect(employee.getId()).toBe('2222');
});

test('Testing getEmail() functionality. should return the email of the employee', () => {
    expect(employee.getName()).toBe('markbarstowjr@gmail.com');
});

test('Testing getRole() functionality. should return the role of the employee, in this case, "Employee"', () => {
    expect(employee.getName()).toBe('Employee');
});