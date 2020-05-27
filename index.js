require('dotenv').config();

const db = require('./db');
db.connect(() => {
    console.log('Connected to database');

    const http = require('http');
    const app = require('./app');
    const port = process.env.PORT || 3000;

    const server = http.createServer(app);
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});

