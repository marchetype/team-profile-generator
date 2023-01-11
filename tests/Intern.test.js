const Intern = require('../lib/Intern');
const intern = new Intern('Mark','2222', 'markbarstowjr@gmail.com', 'School of Hard Knocks');

test('Testing to obtain value from DOM manipulation of object', () => {
    expect(intern.name).toBe('Mark');
    expect(intern.id).toBe('2222');
    expect(intern.email).toBe('markbarstowjr@gmail.com');
    expect(intern.gitHub).toBe('marchetype');
});

test('Testing getRole() functionality. Should return the role of employee("Intern")', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('Testing getSchool() functionality. Should return the school of employee', () => {
    expect(intern.getSchool()).toBe('School of Hard Knocks');
});

test('Testing getId() functionality. Should return the ID of employee("2222")', () => {
    expect(intern.getId()).toBe('2222');
});

test('Testing getName() functionality. Should return the name of employee("Mark")', () => {
    expect(intern.getName()).toBe('Mark');
});