const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/surflocations', function(req, res) {
  axios.get('http://api.spitcast.com/api/spot/all')
  .then((response) => {
    res.send(response.data);
  })
  .catch(err => res.send(err.message));
})

app.get('/surfspot/:surfid', function(req, res) {
  axios.get(`http://api.spitcast.com/api/spot/forecast/${req.params.surfSpotId}/`)
  .then((response) => {
    res.send(response.data)
  })
  .catch(err => res.send("Sorry, the data was not successfully received: ", err));
})

var port = process.env.PORT || 8080

app.listen(port, console.log("Server is listening on port " + port));