const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    const users = ['Lucas', 'Patryck', 'Peter', 'Nathan'];
    return res.status(201).json(users);
})

module.exports = routes;