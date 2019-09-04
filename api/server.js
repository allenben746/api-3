const express = require('express');

const server = express();
const productsRouter = require("../products/productsRouter");
const suppilersRouter = require("../suppliers/suppilersRouter");

//Global middleware
server.use(express.json()) //allows Express to take JSON and convert to vanilla JS object
server.use('/products', productsRouter);
// server.use('/clients', clientsRouter);
server.use('/suppilers', suppilersRouter);



//Route Handlers

server.get('/', (req,res) => {
    res.status(200).json({message : "API up"})
})


module.exports = server;