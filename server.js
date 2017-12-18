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

app.get('/',( req, res ) => {
  let results = req.query;
  let sample = (`There's a ${results.adjective1} new ${results.name} in ${results.place} and everyone's talking. Stunningly 
  ${results.adjective2} and ${results.adverb} ${results.adjective3}, all the cool kids know it. However, ${results.name} has
   a secret - ${results.name}'s a vile vampire. 

   Will it end with a bite, or with a stake through the bungee cord?`);

  res.json(sample);
  
  
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

