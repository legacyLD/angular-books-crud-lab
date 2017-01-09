angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

// add your BooksIndexController function here!
// don't forget $http if you need to make requests

function BooksIndexController($http) {
  console.log('stuff happens');
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(getBooksSuccess, getBooksError);
  function getBooksSuccess(res) {
    vm.books = res.data.books;
    console.log('books retrieved!');
    console.log(res);
  };
  function getBooksError(res) {
    console.log(res, err);
  };
}
