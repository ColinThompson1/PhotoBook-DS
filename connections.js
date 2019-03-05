// import WebSocketJSONStream from "websocket-json-stream";
// import WebSocket from "ws";
// import http from "http";
// import app from "./app"
// import share from "./share";
//
// // export function init() {
// //     console.log('sdjhkflajslk;df');
// //     let server = http.createServer(app);
// //     const wss = new WebSocket.Server({
// //         server: server,
// //         path: 'data'
// //     });
// //     server.listen(8080);
// //     wss.on('connection', function (ws, req) {
// //         console.log('Connection Established with IP: ' + req.connection.remoteAddress);
// //         let stream = new WebSocketJSONStream(ws);
// //         share.listen(stream);
// //     });
// // }
//
//
// // const con = share.connect();
// // const doc = con.get('testing', '1')
// // doc.fetch(function (err) {
// //     if (err) {
// //         throw err;
// //     }
// //
// //     if (doc.type === null) {
// //         doc.create({content: ''})
// //     }
// //
// // })