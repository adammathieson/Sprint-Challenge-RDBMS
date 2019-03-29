const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../routers/projects-router.js');
const actionsRouter = require('../routers/actions-router.js')

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;