const express = require('express');
const cors = require('cors');
const env = require('./env');
const testRoute = require('./app/routes/testRoute');

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', testRoute);


app.listen(env.port).on('listening', () => {
  console.log(`🚀 are live on ${env.port}`);
});


module.exports = app
