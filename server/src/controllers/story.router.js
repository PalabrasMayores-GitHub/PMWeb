const express = require('express');

const { getStory } = require('./story.controllers');

const storyRouter = express.Router();
storyRouter.get('/:videoID', (req, res) => getStory(req, res))

module.exports = storyRouter;