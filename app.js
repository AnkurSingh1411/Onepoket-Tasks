const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/sample');
app.use(bodyParser.json());
app.use('/', routes);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});