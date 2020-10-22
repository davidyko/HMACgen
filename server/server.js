const express = require('express');
const HmacGen = require('./helper.js');

const PORT = 4000;
const app = express();

app.use(express.json());

app.use(express.static('client/dist'));

app.post('/verify', (req, res) => {
  const userID = req.query.id;
  let token = HmacGen(userID);
  let tokenObj = {id: token};
  return res.send(tokenObj);
})

app.listen(PORT, () => console.log('Listening on port: ', PORT));