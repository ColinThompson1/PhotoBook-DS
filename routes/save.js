const express = require('express');
const router = express.Router();
const WebSocketJSONStream = require('websocket-json-stream');
import backend from '../sharedb'

router.ws('/editor', function(ws, req) {

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('New editor connection opened from ' + ip);

    // Setup ShareDB
    const stream = new WebSocketJSONStream(ws);
    backend.listen(stream);

    ws.on('message', function(msg) {
        console.log(msg);
        ws.send(msg);
    });

    ws.on('open', () => {
        console.log('hi')
    })
});

module.exports = router;