var express = require('express');
var router = express.Router();

import WebSocketJSONStream from "websocket-json-stream";
// import share from "../share";

/* Exposed at /collab/editor */
router.ws('/editor', function (ws, req) {

    ws.on('connection', function (ws, req) {
        console.log('Connection Established with IP: ' + req.connection.remoteAddress);
        // let stream = new WebSocketJSONStream(ws);
        // share.listen(stream);
    });

    ws.on('upgrade', () => {
        console.log('skdlfj;laksjdf')
    })
});

module.exports = router;
