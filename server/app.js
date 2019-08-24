
const express = require('express');
const db = require('../models/placesModel');
// const path = require('path');

const port = 3000;
const app = express();

//app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../client/dist`));


app.get('/api/nearbyPlaces', (req, res) => {
  db.getAll((err, data) => {
    if (err) {
      throw err; 
    } else {
      res.send(data)
    }
  })
})


app.listen(port, () => {
  console.log(`Listening to port ${[port]}`);
});