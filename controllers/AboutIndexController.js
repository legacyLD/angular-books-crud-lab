angular.module('libraryApp')
  .controller('AboutIndexController', AboutIndexController);

// AboutIndexController.$inject=['$http'];
function AboutIndexController() {
  console.log('something');
  var vm = this;
  vm.name = "LD";
};
