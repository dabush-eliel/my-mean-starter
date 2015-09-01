/* image service */
angular.module('app')
    .factory('mainService',['$http','$q',mainService]);

// main service - provide RESTful api
function mainService($http, $q){
    return {
        // http GET request
        get : function(url){
            // defer our response
            var deferred = $q.defer();

            $http.get(url)
                .then(function(response){
                    console.log(response);
                    deferred.resolve(response);
                },function(response){
                    console.log(response);
                    deferred.reject(response);
                });

            // send back a promise
            // will be updated when resolve/reject will be exectued 
            return deferred.promise();
        },

        // http POST request
        post : function(url){
            // defer our response
            var deferred = $q.defer();

            $http.post(url)
                .then(function(response){
                    console.log(response);
                    deferred.resolve(response);
                },function(response){
                    console.log(response);
                    deferred.reject(response);
                });

            // send back a promise
            // will be updated when resolve/reject will be exectued 
            return deferred.promise();
        },

        // http PUT request
        put : function(url){
            // defer our response
            var deferred = $q.defer();

            $http.put(url)
                .then(function(response){
                    console.log(response);
                    deferred.resolve(response);
                },function(response){
                    console.log(response);
                    deferred.reject(response);
                });

            // send back a promise
            // will be updated when resolve/reject will be exectued 
            return deferred.promise();
        },

        // http DELETE request
        delete : function(url){
            // defer our response
            var deferred = $q.defer();

            $http.delete(url)
                .then(function(response){
                    console.log(response);
                    deferred.resolve(response);
                },function(response){
                    console.log(response);
                    deferred.reject(response);
                });

            // send back a promise
            // will be updated when resolve/reject will be exectued 
            return deferred.promise();
        }
    };
};
/* end of file */
