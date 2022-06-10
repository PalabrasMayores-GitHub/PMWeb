const {StoriesModel} = require('./story.mogo')

async function getStoryFromDB (storyID) {
    const response = await StoriesModel.findOne({storyID}, {_id:0})
    return response;
}

module.exports = {
    getStoryFromDB
}