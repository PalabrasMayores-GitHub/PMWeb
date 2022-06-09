const {StoriesModel} = require('./story.mogo')

async function getStoryFromDB (videoID) {
    const response = await StoriesModel.findOne({videoID}, {_id:0})
    return response;
}

module.exports = {
    getStoryFromDB
}