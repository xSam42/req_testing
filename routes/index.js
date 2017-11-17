var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
  // Configs for web3
var Web3 = require('web3');
var web3_provider = 'http://localhost:8545';
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(web3_provider));

console.log(web3.eth);
});






module.exports = router;
