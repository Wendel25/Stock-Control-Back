"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(request, response, next) {
    // Acessar token JWT
    var authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    var _a = authToken.split(" "), token = _a[1];
    try {
        // Validar token
        var sub = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET).sub;
        request.user_id = sub;
        return next(); // Deixa que a requisição prossiga
    }
    catch (error) {
        return response.status(401).end();
    }
}
exports.isAuthenticated = isAuthenticated;
