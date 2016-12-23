// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


// / This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "6c1cfdae203248ad8b449476c2a0819e"



var helper = {

  // This function serves our purpose of running the query to geolocate. 
  runQuery: function(term){
       

       console.log(term);

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + term;


   return axios.get(queryURL).then(function(response) {

        console.log(response);
        return response;

  });

},

  // getResults: function(){

  //  return axios.get('/api')
  //    .then(function(response){

  //      console.log(response);
  //      return response;
  //    });
  // },

 //   postResults: function(term) {

 //      return axios.post('/api', {term: term})
  //    .then(function(results){

  //      console.log("Posted to MongoDB");
  //      return(results);
  //    })

 //   },
   
};


// We export the helpers function 
module.exports = helper;