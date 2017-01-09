angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject=['$routeParams', '$location', '$http'];
function BooksShowController($routeParams, $location, $http) {
  console.log('bookShow called');
  var vm = this;
  var bookId = $routeParams.id;
  vm.bookShow = function() {
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(getBooksSuccess, getBooksError);
    function getBooksSuccess(res) {
      vm.books = res.data;
      console.log('book retrieved!');
    };
    function getBooksError(res) {
      console.log(res, err);
    };
  };
  vm.bookShow();

  vm.bookUpdate = function(book) {
    console.log('update called');
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(updateBookSuccess, updateBookError);
    function updateBookSuccess(res) {
      vm.books = res.data.books;
      console.log('book updated!');
      console.log(res);
      $location.path('/');
    };
    function updateBookError(res) {
      console.log(res, err);
    };
  };

  vm.bookDelete = function(book) {
    console.log('delete called');
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(deleteBooksSuccess, deleteBooksError);
    function deleteBooksSuccess(res) {
      vm.books = res.data.books;
      console.log('book deleted!');
      console.log(res);
      $location.path('/');
    };
    function deleteBooksError(res) {
      console.log(res, err);
    };
  };
};
