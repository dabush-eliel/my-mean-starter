// api for db communication 
var api = require('./api');

// main routes
module.exports = function(app) {

    app.route('/api')
      .get(function(req, res) {
        // api.get(req,res);
        res.send('Get api call');
      })
      .post(function(req, res) {
        // api.post(req,res);
        res.send('Post api call');
      })
      .put(function(req, res) {
        // api.put(req,res);
        res.send('Update api call');
      })
      .delete(function(req,res){
        // api.delete(req,res);
        res.send('Delete api call');
      });

    // frontend routes
    // route to handle all angular requests
    app.get('*', function(req, res) {
        console.log('sending index.html file'); // debug
        res.sendfile('index.html'); // load index.html file
    });

};