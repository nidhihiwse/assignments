app.controller('authorInfoEditCtrl', function($http,$scope, $location) {
				var myUrl = $location.search();
    
    
				$scope.listofskills=[
					{ name:'JavaScript',
					checked:false},
					
					{ name:'Angular',
					checked:false},
					{ name:'Backbone',
					checked:false},
					{ name:'CSS', 
					checked:false},
					{ name:'HTML',
					checked:false},
					{name:'Java',
					checked:false},
					{name:'Knockout',
					checked:false}
					];
				
				$scope.names = ["Engineering","HR","Management"];
				var request = $http({
					url: 'http://172.27.12.81:3000/author/byname',
					method: "POST",
					data: myUrl
					});
				request.then(function success(response) {
					$scope.authorDetails = response.data;
					
					for(var i=0;i<$scope.listofskills.length;i++)
					{
						for(var j=0;j<$scope.authorDetails.skills.length;j++)
						{
							if($scope.listofskills[i].name === $scope.authorDetails.skills[j])
							{
								$scope.listofskills[i].checked = true;
						}
						}
					}
					
					
					
					});

							 $scope.showMe = false;
				$scope.myFunc = function() {
				$scope.showMe = !$scope.showMe;
				}
				
				$scope.update=function(author){
					var request = $http({
						url: 'http://172.27.12.81:3000/author/update',
						method: "PUT",
						data: author
						});
				request.then(function success(response) {
					alert(response.data.message);
						});
                    $scope.myFunc();
					}

							$scope.del=function(auth){
								var authorid={"empid":auth.empid};
								var request=$http({
								url:'http://172.27.12.81:3000/author/remove',
								method:"DELETE",
								data:angular.toJson(authorid),
								headers: {'Content-Type': 'application/JSON'}
							
							
						});
						request.then(function success(response){
							alert(response.data.message);
                            console.log(response.data.message)
                           
						});
                       
						
					}
			
					
			});
