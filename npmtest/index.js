const express = require('express');
const app = express();
app.listen('4001', () => {
    console.log('The server is listening on port 4001')
})
app.use(express.static('public'));
app.get('/expressions', (req, res, next) => {
    res.send('this is the response')
  })