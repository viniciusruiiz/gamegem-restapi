require('dotenv').config()
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import requireDir from 'require-dir';

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => {
    console.log('connected to database!')
});

requireDir('./model')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'));

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});