const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static('./'));
app.use(express.static('./scripts'));
app.use(express.static('./html'));
app.use(express.static('./css'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'html/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000, () => {
  console.log('server started');
});