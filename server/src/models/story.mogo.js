const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    PersonName: {
        type: String,
        required: true
    },
    Bibliography: {
        type: String,
        required: true
    },
    videoID: {
        type: String,
        required: true
    },
    comments: [{
        name: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    }]
})

const StoriesModel = mongoose.model('Story', storySchema);

module.exports = {
    StoriesModel,
}