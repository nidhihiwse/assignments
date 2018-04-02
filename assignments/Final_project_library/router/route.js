  app.config(function($routeProvider) {
    $routeProvider
   .when("/",  {
        templateUrl : "views/bookList/bookList.html",
        controller: "myCtrl"
                })
   .when('/screen4',
				{
				controller: 'addNewBookCtrl',
				templateUrl:'views/addNewBook/addNewbook.html'
				})
   .when('/screen5',
				{
				controller:'addNewAuthorCtrl',
				templateUrl:'views/addNewAuthor/addNewAuthor.html'
				})

   .when('/screen2',
                {
                controller: 'bookInfoEditCtrl',
                templateUrl:'views/bookInfoEdit/bookInfoEdit.html'
				})
	.when('/screen3',
				{
                controller: 'authorInfoEditCtrl',
                templateUrl:'views/authorInfoEdit/authorInfoEdit.html'
				})
    
    .when('/screen6',
				{
                controller: 'authorList',   
                templateUrl:'views/authorList/authorList.html'
				})
    
 });
