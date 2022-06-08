const express = require('express');
const storyRouter = require('./controllers/story.router')

const app = express();

app.use('/story', storyRouter);

module.exports = app;