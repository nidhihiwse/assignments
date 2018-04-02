app.controller('myCtrl', function($scope, $http) {
   $http.get("http://172.27.12.81:3000/book/list")
    .then(function(response) {
        $scope.books = response.data;
    });
    
  $scope.sortType ='isbn';//set default sort type
  $scope.sortReverse=false;//set default sort order  
});
   