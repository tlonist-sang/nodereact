const express = require('express'); //commonjs module
// import express from 'express' => es2016 module

const app = express();
app.get('/', (req, res) => {
    res.send({hi:'bye~'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
