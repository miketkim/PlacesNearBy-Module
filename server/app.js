
const express = require('express');
const db = require('../models/placesModel');
// const path = require('path');

const port = 3000;
const app = express();

//app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../client/dist`));


app.get('/api/nearbyPlaces/:id', (req, res) => {
  //req.params.id
  let randomIndex = Math.floor(Math.random() * Math.floor(100));
  database.find({ index: { $gte: randomIndex }}, (err, docs) => {
    if (err) {
      throw err; 
    } else {
      res.send(docs); 
    }
  });
}); 


app.listen(port, () => {
  console.log(`Listening to port ${[port]}`);
});