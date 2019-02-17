
	var yourWins= 0;
 	var yourLosses= 0;
 	var addition=0;
 	var total= Math.floor((Math.random() * 100) + 19);
 	
 	var c1 = Math.floor((Math.random() * 12) + 1);
 	var c2 = Math.floor((Math.random() * 12) + 1);
 	var c3 = Math.floor((Math.random() * 12) + 1);
 	var c4 = Math.floor((Math.random() * 12) + 1);



 	var updateAddition = function () {
 		$('.addition').empty();
 		$('.addition').append(addition);

 		$('#yourWins').empty();
 		$('#yourWins').append(yourWins);

 		$('#yourLosses').empty();
 		$('#yourLosses').append(yourLosses);
 	}


 // restart game
 		var restart = function (){
 			addition = 0;
 			total = Math.floor((Math.random() * 100) + 19);

 			$('.total').empty();
 			$('.total').append(total);

 			var c1 = Math.floor((Math.random() * 12) + 1);
 			var c2 = Math.floor((Math.random() * 12) + 1);
 			var c3 = Math.floor((Math.random() * 12) + 1);
 			var c4 = Math.floor((Math.random() * 12) + 1);
 			updateAddition();
 		}	


 	var game = function (){
 		if (addition == total) {
 			yourWins = yourWins + 1;
 			alert("You win!");
 			restart();
 		} else if (addition > total) {
 			yourLosses = yourLosses + 1;
 			alert("You lost");
 			restart();
 		} else {
 			updateAddition();
 		}
 	}

 	$('.total').append(total);
 	$('.addition').append(addition);

 	$( document ).ready(function() {
 		$('#c1').click(function(){
 			addition = addition + c1;
 			game();
 		})

 		$('#c2').click(function(){
 			addition = addition + c2;
 			game();
 		})

 		$('#c3').click(function(){
 			addition = addition + c3;
 			game();
 		})

 		$('#c4').click(function(){
 			addition = addition + c4;
 			game();
 		})
 	});


