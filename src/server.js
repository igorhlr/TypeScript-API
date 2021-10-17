"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// @types/express
var app = (0, express_1.default)();
/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */
app.get("/test", function (request, response) {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá NLW");
});
app.post("/test-post", function (request, response) {
    return response.send("Olá NLW método POST");
});
// http://localhost:3000
app.listen(3000, function () { return console.log("Server is running"); });
