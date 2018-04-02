app.controller('bookInfoEditCtrl', function($http,$scope, $location) {
					$scope.listofavailable=[
					{ name:'Amazon',
					checked:false},
					
					{ name:'Ebay',
					checked:false},
					{ name:'Flipkart',
					checked:false},
					];

				var myUrl = $location.search();
                console.log(myUrl);
				var request = $http({
					url: 'http://172.27.12.81:3000/book/byisbn',
					method: "POST",
					data: myUrl
					});
				request.then(function success(response) {
					$scope.bookDetails = response.data;
					for(var i=0;i<$scope.listofavailable.length;i++)
					{
						for(var j=0;j<$scope.bookDetails.availableOn.length;j++)
						{
							if($scope.listofavailable[i].name === $scope.bookDetails.availableOn[j])
							{
								$scope.listofavailable[i].checked = true;
						    }
						}
					}
					
					
					});

			$scope.showMe = false;
				$scope.myFunc = function() {
				$scope.showMe = !$scope.showMe;
				}
				
				$scope.update=function(book){
					var request = $http({
						url: 'http://172.27.12.81:3000/book/update',
						method: "PUT",
						data: book
						});
				request.then(function success(response) {
					
                    alert(response.data.message);
						});
                    
                    $scope.myFunc();
					}
					
					$scope.del=function(){
						var bookisbn='isbn='+$scope.bookDetails.isbn;
						var request=$http({
							url:'http://172.27.12.81:3000/book/remove',
							method:"DELETE",
							data:bookisbn,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
							
							
						});
						request.then(function success(response){
							
				            alert(response.data.message);
                           
						});
						
						
					}
					
				

			});
			
