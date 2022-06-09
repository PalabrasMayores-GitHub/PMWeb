const path = require('path')
const express = require('express');
const storyRouter = require('./controllers/story.router')

const app = express();

app.use('/story', storyRouter);


app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


module.exports = app;