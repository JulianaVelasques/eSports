"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
//HTTP methods / API RESTful
app.get('/games', function (request, response) {
    return response.json([]);
});
//criação de anúncio
app.post('/ads', function (request, response) {
    return response.status(201).json([]);
});
//listar anúncios de um game específico, não todos
app.get('/games/:id/ads', function (request, response) {
    // const gameId = request.params.id;
    return response.json([
        { id: 1, name: 'Anúncio' },
        { id: 2, name: 'Anúncio' },
        { id: 3, name: 'Anúncio' },
        { id: 4, name: 'Anúncio' },
    ]);
});
//pegar de um ads específico um discord
app.get('/ads/:id/discord', function (request, response) {
    // const adId = request.params.id;
    return response.json([]);
});
app.listen(3333);
