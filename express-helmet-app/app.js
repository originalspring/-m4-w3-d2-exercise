'use strict'

const express = require('express');
const helmet = requrie('helmet');
const app = express();

app.use(helmet())

app.get('/', (req,res)=>{
  console.log('route \'/\' called!')
  res.send({res:'Sending 200 as response'})
});

app.listen(3000)
console.log('Express app is up and runing on port 3000')
