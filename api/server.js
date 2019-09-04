const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.status(200).json({message : "API up"})
})


// server.get('/products', (req,res => {

// }))

// server.get('/clients', (req,res => {
    
// }))

// server.get('/suppilers', (req,res => {
    
// }))

module.exports = server;