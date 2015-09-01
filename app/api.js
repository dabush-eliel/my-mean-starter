// get image model
var Entity = require('./models/image');

module.exports = {
    // get from db
    get : function (req,res){
        Entity.find(function(err, objects) {
            if (err){
                res.send(err);
            }
            console.log(objects);
            res.json(objects); // return all objects in JSON format
        });
    },

    // post to db
    post : function (req,res){
        // acting like GET - TODO : set action
        Entity.find(function(err, objects) {
            if (err){
                res.send(err);
            }
            console.log(objects);
            res.json(objects); // return all objects in JSON format
        });
    },

    // put in db
    put : function (req,res){
        // acting like GET - TODO : set action
        Entity.find(function(err, objects) {
            if (err){
                res.send(err);
            }
            console.log(objects);
            res.json(objects); // return all objects in JSON format
        });
    },

    // delete from db
    delete : function(req,res){
        console.log(req.params.id); // debug
        Entity.remove({ '_id':req.params.id },function(err,obj){
            if (err){
                res.send(err);
            }
        });
    }
};