const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const events = require('./routes/api/events')

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

//Use Routes
app.use('/api/events', events);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server has started running on port ${port}`));