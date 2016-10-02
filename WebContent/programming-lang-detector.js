var app = angular.module("langDetectorApp",[]);
app.controller('langDetectorCtrl', function($scope,$http){
	$scope.testCode ="";
	$scope.detectedLanguage="";
	var keyWords = {};
	var languages = ['c/c++', 'java', 'python', 'ruby', 'perl', 'javascript'];
	var langScoreMap = [0,0,0,0,0,0];
	
	var getRidOfStmts = function(){
		$scope.tempString ="";
		$scope.tempArr = $scope.testCode.split(/['"]+/);
		for(var i=0; i<$scope.tempArr.length; i++){
			$scope.tempString += $scope.tempArr[i];
			i++;
		}
	}
	
	var getRidOfSpecialChars = function(){
		$scope.tempString = $scope.tempString.replace(/[@!^=`|;&\/\\#,+()$~%.'":*?<>{}]/g, ' ');
	}
	
	$scope.detectLanguage = function(){
		var startFrom = new Date().getTime();
		$scope.possiblelangs = [];
		$scope.detectedLanguage="Predicting...";
		
		getRidOfStmts();
		getRidOfSpecialChars();
		
		$scope.tempArr = $scope.tempString.split(/\s+/);
		$http.get('key-words.properties').then(function (response) {
			keyWords = response.data;
			if(keyWords){
				angular.forEach($scope.tempArr, function(keyWord){
					var quickCheck = [];
					if(keyWord){
						if(keyWords.C_CPP.indexOf(keyWord)!==-1){
							quickCheck.push('C/C++');
							langScoreMap[0]++;
						}
						if(keyWords.JAVA.indexOf(keyWord)!==-1){
							quickCheck.push('JAVA');
							langScoreMap[1]++;
						}
						if(keyWords.PYTHON.indexOf(keyWord)!==-1){
							quickCheck.push('PYTHON');
							langScoreMap[2]++;
						}console.log(keyWords.RUBY.length);
						if(keyWords.RUBY.indexOf(keyWord)!==-1){
							quickCheck.push('RUBY');
							langScoreMap[3]++;
						}
						if(keyWords.PERL.indexOf(keyWord)!==-1){
							quickCheck.push('PERL');
							langScoreMap[4]++;
						}
						if(keyWords.JAVASCRIPT.indexOf(keyWord)!==-1){
							quickCheck.push('JAVASCRIPT');
							langScoreMap[5]++;
						}
						if(quickCheck.length===1){
							$scope.detectedLanguage = quickCheck[0];
							return;
						}
					}
				});
				
				var ArrMax = Math.max.apply(Math, langScoreMap);
//				$scope.possiblelangs =[];
				for(var i=0;i<langScoreMap.length;i++){
					if(langScoreMap[i]===ArrMax){
						$scope.possiblelangs.push(languages[i]);
					}
				}
				if($scope.possiblelangs.length===1){
					$scope.detectedLanguage = $scope.possiblelangs[0];
				}
			}
			if($scope.detectedLanguage==="Predicting..."){
				$scope.detectedLanguage = $scope.possiblelangs;
				$scope.testCode = "";
			}
			console.log(new Date().getTime() - startFrom+"ms");
		});
//		console.log(new Date().getTime() - startFrom+"ms");
	}
});