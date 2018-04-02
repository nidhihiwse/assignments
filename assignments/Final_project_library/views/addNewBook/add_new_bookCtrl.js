app.controller('addNewBookCtrl', function($http,$scope) {
					$scope.listofavailable=[
					{ name:'Amazon',
					checked:false},
					
					{ name:'Ebay',
					checked:false},
					{ name:'Flipkart',
					checked:false},
					];
			
				$scope.add=function(book){
				var array=[];

					for(var i=0;i<$scope.listofavailable.length;i++)
					{
						if($scope.listofavailable[i].checked==true)
						{
							array.push($scope.listofavailable[i].name);
						}
			
					}
			var bookadd={
				isbn: $scope.book.isbn,
                title: $scope.book.title,
                author: $scope.book.author,
                price: $scope.book.price,
                availableOn:array
			            }
					var request = $http({
						url: 'http://172.27.12.81:3000/book/new',
						method: "POST",
						data: bookadd
						});
				request.then(function success(response) {
                       alert(response.data.message);
						});
					}
                
                 
                $scope.reset=function(){
                    $scope.book="";
                    
                   }
                
                
                
			});

