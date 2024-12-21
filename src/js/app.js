class Validator {
    validateUsername(username) {
        if (typeof username !== 'string') {
            return false;
        }

        const regex = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
        if (!regex.test(username)) {
            return false
        }

        const digitsRegex = /\d{4,}/;
        if (digitsRegex.test(username)) {
            return false
        }

        return true;
    }
}

module.exports = Validator;
