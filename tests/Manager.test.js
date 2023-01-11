const Manager = require('../lib/Manager');
const manager = new Manager('Mark','2222', 'markbarstowjr@gmail.com', '2');

test('Testing to obtain value from DOM manipulation of object', () => {
    expect(manager.name).toBe('Mark');
    expect(manager.id).toBe('2222');
    expect(manager.email).toBe('markbarstowjr@gmail.com');
    expect(manager.office_num).toBe('2');
});

test('Testing getRole() functionality. Should return the role of employee("Manager")', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('Testing getOfficeNum() functionality. Should return the office number of employee', () => {
    expect(manager.getOfficeNum()).toBe('2');
});

test('Testing getId() functionality. Should return the ID of employee("2222")', () => {
    expect(manager.getId()).toBe('2222');
});

test('Testing getName() functionality. Should return the name of employee("Mark")', () => {
    expect(manager.getName()).toBe('Mark');
});