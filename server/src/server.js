const http = require('http');
// const cors = require('cors');
require('dotenv').config();


const app = require('./app');
const { ConnectToMongo } = require('./services/mongo');


const server = http.createServer(app);

async function startServer() {
    await ConnectToMongo();
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => 
        console.log(`server lissening to ${PORT}`)
    );
}
startServer();
