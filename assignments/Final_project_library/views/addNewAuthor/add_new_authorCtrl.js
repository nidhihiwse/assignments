app.controller('addNewAuthorCtrl', function($http,$scope) {
			
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
			
			
			$scope.add=function(author){
					var array=[];

					for(var i=0;i<$scope.listofskills.length;i++)
					{
						if($scope.listofskills[i].checked==true)
						{
							array.push($scope.listofskills[i].name);
						}
			
					}
			var authoradd={
				empid: $scope.author.empid,
				name: $scope.author.name,
				email: $scope.author.email,
				website: $scope.author.website,
				department: $scope.author.department,
				skills:array
			     }

				var request = $http({
					url: 'http://172.27.12.81:3000/author/new',
					method: "POST",
					data: authoradd
					});
				request.then(function success(response) {
    alert(response.data.message
        
                    );
						});
					}
            
            
             
                $scope.reset=function(){
                    $scope.author="";
                   
                    
                }
			});


