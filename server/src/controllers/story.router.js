const express = require('express');

const { getStory } = require('./story.controllers');

const storyRouter = express.Router();
storyRouter.get('/:id', getStory)

module.exports = storyRouter;