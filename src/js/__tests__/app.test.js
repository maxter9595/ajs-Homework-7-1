const Validator = require('../app');

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('should return false for non-string input', () => {
        expect(validator.validateUsername(123)).toBe(false);
        expect(validator.validateUsername(null)).toBe(false);
        expect(validator.validateUsername(undefined)).toBe(false);
        expect(validator.validateUsername({})).toBe(false);
        expect(validator.validateUsername([])).toBe(false);
    });

    test('should return true for valid usernames', () => {
        expect(validator.validateUsername('validUser')).toBe(true);
        expect(validator.validateUsername('user_name')).toBe(true);
        expect(validator.validateUsername('user-name')).toBe(true);
        expect(validator.validateUsername('valid_123_user')).toBe(true);
    });

    test('should return false for invalid start or end characters', () => {
        expect(validator.validateUsername('-invalid')).toBe(false);
        expect(validator.validateUsername('_invalid')).toBe(false);
        expect(validator.validateUsername('invalid-')).toBe(false);
        expect(validator.validateUsername('invalid_')).toBe(false);
    });

    test('should return false for usernames with more than 3 consecutive digits', () => {
        expect(validator.validateUsername('user1234name')).toBe(false);
        expect(validator.validateUsername('12345user')).toBe(false);
        expect(validator.validateUsername('user123456')).toBe(false);
    });

    test('should return false for invalid characters in username', () => {
        expect(validator.validateUsername('invalid@name')).toBe(false);
        expect(validator.validateUsername('user name')).toBe(false);
        expect(validator.validateUsername('username!')).toBe(false);
        expect(validator.validateUsername('user#name')).toBe(false);
    });

    test('should return false for username starting or ending with digits', () => {
        expect(validator.validateUsername('1username')).toBe(false);
        expect(validator.validateUsername('username2')).toBe(false);
        expect(validator.validateUsername('3user4')).toBe(false);
    });
});
