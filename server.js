"use strict";

const express = require('express');
const app = express();

const config = require('./config');
const { host, port } = config;


app.listen(port, () => console.log(`Server is listening on port  ${port}`));

app.get('/', (req, res) => {
    return res.status(200).send("Api is running");
});
