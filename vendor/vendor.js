'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:4512/caps'

const connected = io.connect(host);
const fakerOrder = require('faker');
const store = fakerOrder.company.companyName();

setInterval(()=>{
    let payload = {
        storeName : store,
        orderID : fakerOrder.datatype.number(),
        customerName : fakerOrder.name.firstName(),
        customerAddress : fakerOrder.address.cityName()
    }
    connected.emit('pickup', payload);
   
},5000);

connected.on('delivered' , (payload)=>{
    console.log(`thank you |^_^|`)
 });