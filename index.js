const express = require('express');
const app = express();
 
app.get('/aircon/on', function (req, res) {
  res.send('エアコンON');
})

app.get('/aircon/off', function (req, res) {
  res.send('エアコンOFF');
})

app.listen(3000);