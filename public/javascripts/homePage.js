

var app = angular.module('ethapp',['ngMaterial','ngMessages','material.svgAssetsCache','ngAnimate']);


var controlr = function($scope,$http,$interval){

	var socket = io.connect();
	$scope.donationTransResult = [];
	$scope.donateEth = function(ethValue){
		var _ethValue = document.getElementById('ethDonationValue').value;

		if(typeof web3 !== 'underfined'){
			window.web3 = new Web3(web3.currentProvider);
			console.log('you do have web3!');
		}
		else{
			console.log('You should install Metamask!');
		}
		web3.version.getNetwork((err,netId) => {
				switch(netId){
					case "1":
						console.log('This is mainnet');
					case "3":
						console.log('This is Ropsten Test Network.');
						break
					default:
						console.log('This is an unknown network.');
				}

			});

		console.log('Your Account: ' + web3.eth.accounts[0]);
		var inWei = web3.toWei(_ethValue,'ether');

		web3.eth.sendTransaction({
			from: web3.eth.accounts[0],
			to: '0x2B8F5b01C35f99B0bd3f914F1192F24536c71d1e',
			value: inWei,
		}, function(err,transHash){
			console.log("Transaction Hash: " + transHash);
			$scope.donationTransResult = transHash;
			$scope.$apply();
		});
		

		//socket.emit('recEthDonation', _ethValue);
		/*socket.on('ethDonateToC', function(result){
			console.log(result);
			$scope.donationTransResult = result;	
			});
		$scope.$apply();
		// Populate the Coins
		};*/
	};

}


controlr.$inject = ['$scope','$http','$interval'];
app.controller("appcontroller",controlr);
