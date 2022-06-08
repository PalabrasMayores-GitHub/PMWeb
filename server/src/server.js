const http = require('http')
const app = require('./app');

const server = http.createServer(app);

async function startServer() {
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => 
        console.log(`server lissening to ${PORT}`)
    );
}
startServer();