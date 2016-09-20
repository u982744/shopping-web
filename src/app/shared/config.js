"use strict";
var Config = (function () {
    function Config() {
    }
    Config.apiUrl = "https://shopping-rest.herokuapp.com/";
    //static apiUrl = "http://192.168.1.104:3000/";
    Config.token = "";
    Config.userEmail = "";
    Config.userId = "";
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map