
export default class Validator {
    validateUsername(username) {
        const mainRe = /^[^0-9_-][a-zA-Z0-9_-]+[^0-9_-]$/;
        const regInt = /\d{4,}/;

    return (
        mainRe.test(username) &&
        !regInt.test(username)
        );
    }
}
