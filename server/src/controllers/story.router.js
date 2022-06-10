const express = require('express');

const { getStory } = require('./story.controllers');

const storyRouter = express.Router();
storyRouter.get('/:storyID', (req, res) => getStory(req, res))

module.exports = storyRouter;