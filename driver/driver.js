'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:4512/caps';

const connected = io.connect(host);



connected.on('pickup', (payload) => {
    setInterval(() => {
        console.log(`picking up ${payload.orderID}`);
        connected.emit('in-transit', (payload));
    }, 1500);
    setInterval(() => {
        console.log(`DELIVERED ${payload.orderID}`);
        connected.emit('delivered', (payload));
    }, 3000);
});


