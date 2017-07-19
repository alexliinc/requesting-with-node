'use strict'

var request = require('request');

//var apiKey = "AIzaSyADstGOfW-261LSjhpAW8I30j3HpaXTOjo" //require('./key.js');
//var apiID  = "003357973645139622470"//require('./id.js');

var keys = require('./env.js');

var apiUrl = "https://www.googleapis.com/customsearch/v1?key="+keys.apiKey+"&cx="+keys.apiID+"&q=";//face+off+movie

// getting movie title
function get(MovieTitle) {
    //console.log(apiUrl+MovieTitle);
    var completeUrl = apiUrl+MovieTitle;

    request(completeUrl, function (error, response, body) {
    //Inside that callback
    //Print out the result
      console.log('TITLE : ', JSON.parse(body).items[0].title);
      //.items[0].title
      //return
    });
}

//get("faceoffmovie");

module.exports = get;
