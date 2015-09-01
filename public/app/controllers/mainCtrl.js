/* main controller */
angular.module('app')
    .controller('mainCtrl',[mainCtrl]);

function mainCtrl(){
    var vm = this;
    vm.hello = 'Hello New Project!';
    vm.items = [this.param0, this.param1, this.param2];


    console.log(this); // debug
 };
 /* end of file */