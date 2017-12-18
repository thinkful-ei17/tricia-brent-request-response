'use strict';

const express = require('express');
const app = express();
app.get('/echo/:what', (req, res) => {
  const {params,query,hostname} = req;
  

  res.json({hostname, query, params});

  console.log(params);
  console.log(query);
  console.log(params);
});


app.listen(8080, () => {
  console.log('Listening on port 8080');
});
