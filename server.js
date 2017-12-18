'use strict';

const express = require('express');
const app = express();
// app.get('/', (req, res) => res.json({foo: 'bar'}));
// JSON object = { params : {userID:34}, key:value, key:value }
// app.get('/echo/:what/query/:', (req, res) => {
// //   const { host, query } = req.params;

// //   res.json({ host, query });
// // });

})

app.listen(8080, () => {
    console.log('Listening on port 8080');
});

// app.get('/users/:userId/books/:bookId', function (req, res) {
//   res.send(req.params)
// })


// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989"  }

//   {userID: 34,
//   bookID: 8989}