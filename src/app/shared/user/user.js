"use strict";
var email_validator_1 = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return email_validator_1.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map