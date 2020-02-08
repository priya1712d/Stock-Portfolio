'use strict'

/* Imports */
const expressLib = require('express');
const app = expressLib();
const request = require('request');
const exHbrs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.port || 5000;


/* Set up the engine properties */

app.engine('handlebars',exHbrs());
app.set('view engine','handlebars');





//API Token : pk_174bd59cf8ee46739b70d43eadea44cc

function stockApi(finishedAPI,ticker) {
  console.log(ticker);
  if(!ticker){
    /* Default stock */
    ticker = 'fb';
  }
  request(`https://cloud.iexapis.com/stable/stock/`+ ticker +`/quote?token=pk_174bd59cf8ee46739b70d43eadea44cc`, { 'json': true }, (err, res, body) => {
   console.log('Response ' + res);
    if (err) {
      console.log(err);
      return finishedAPI('Stock Not Present');
    }
    if(!res){
      return finishedAPI('Stock Not Present');
    }
    if (res.statusCode === 200) {
      return finishedAPI(body);
    }
  });
}


app.use(bodyParser.urlencoded({extended : false}))

app.get('/', (req,res) => {
  stockApi(function(doneAPI){
    res.render('home',{stock: doneAPI});
  });
  console.log('API fecthed');

});

/* Post route */

app.post('/', (req,res) => {
  console.log(' stock ticker ' + req.body.stockTicker);
  const postedStuff =  stockApi(function(doneAPI){
    res.render('home',{stock: doneAPI, postedStuff: postedStuff});
  },req.body.stockTicker);
  console.log('API fetched');

});


app.get('/about', (req,res) => {
  res.render('aboutMe',{stuff:"This is stuff!"});
});


app.use(expressLib.static(path.join(__dirname,'public')));

app.listen(PORT,() => console.log('Server listening on port '+ PORT));


