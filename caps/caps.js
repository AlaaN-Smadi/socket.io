'use strict';


const port = 4512;

const io = require('socket.io')(port); // http://localhost:4512


const caps = io.of('/caps'); // http://localhost:4512/caps



caps.on('connection', (socket) => {
    console.log('Connected Done !!');

    socket.on('pickup', (payload) => {
        console.log("EVENT : { event : 'pickup'", {
            "Data": new Date().toDateString(),
            "payload": payload
        })
        caps.emit('pickup', (payload))
    })
    socket.on('in-transit', (payload) => {
        console.log("EVENT : { event : 'in-transit'", {
            "Data": new Date().toDateString(),
            "payload": payload
        })
        caps.emit('in-transit', (payload))

    })
    socket.on('delivered', (payload) => {
        console.log("EVENT : { event : 'delivered'", {
            "Data": new Date().toDateString(),
            "payload": payload
        })
        caps.emit('delivered', (payload))

    })

})