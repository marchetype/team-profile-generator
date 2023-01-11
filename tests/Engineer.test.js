const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Mark','2222', 'markbarstowjr@gmail.com', 'marchetype');

test('Testing to obtain value from DOM manipulation of object', () => {
    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toBe('2222');
    expect(engineer.email).toBe('markbarstowjr@gmail.com');
    expect(engineer.gitHub).toBe('marchetype');
});

test('Testing getRole() functionality. Should return the role of employee("Engineer")', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('Testing getGithub() functionality. Should return the role of employee("Engineer")', () => {
    expect(engineer.getGithub()).toBe('marchetype');
});

test('Testing getId() functionality. Should return the role of employee("Engineer")', () => {
    expect(engineer.getId()).toBe('2222');
});

test('Testing getName() functionality. Should return the role of employee("Engineer")', () => {
    expect(engineer.getName()).toBe('Mark');
});