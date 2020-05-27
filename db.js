const MongoClient = require('mongodb').MongoClient;
const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/ti-viz';

let _client = null;

function connect(cb) {
    MongoClient.connect(dbUri,
        { useUnifiedTopology: true },
        function (err, client) {
            if (err) throw err;
            _client = client;
            cb();
        }
    );
}

function getClient() {
    if (_client === null) throw new Error('Mongo client hasn\'t been initialized');
    return _client;
}

module.exports = {
    connect,
    getClient
};