const { getStoryFromDB } = require('../models/story.model')

async function getStory (req, res) {
    res.json(await getStoryFromDB(req.params.storyID));
}

module.exports = {
    getStory,
}