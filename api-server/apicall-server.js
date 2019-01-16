require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use('/api', routes);

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

app.listen(8081, () => {
  console.log('Server started')
});