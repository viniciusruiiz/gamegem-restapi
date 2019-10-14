require('dotenv').config()
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import requireDir from 'require-dir';

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => {
    console.log('connected to database!')
});

console.log(
    requireDir('./model')
);

const Game = mongoose.model('Game');

app.use(logger('dev'));

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});