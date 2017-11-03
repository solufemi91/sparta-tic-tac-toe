$(function(event) {

var counterForTurnDisplay = 0;
var counterForPlayerSelector = 0

function turnDisplay(){
		return counterForTurnDisplay += 1;
}
function playerSelector(){
		return counterForPlayerSelector += 1;
}




function setBoxesListenersForX(){

	$('.boxes').click(function(){
		$(this).html('X')
		var myValue = turnDisplay()
		console.log(myValue)
		if (myValue%2 == 0) {
			$('#turn').html('O')

		} else {
			$('#turn').html('X')
		}
	})
}



function setBoxesListenersForO(){

	$('.boxes').click(function(){
		$(this).html('O')
		// change who's turn it is
		var myValue = turnDisplay()
		console.log(myValue)
		if (myValue%2 == 0) {
			$('#turn').html('O')

		} else {
			$('#turn').html('X')
		}


	})
}


function computerPlayerAlternator(){
	$('.boxes').click(function(){
		 var myValue = playerSelector()
		 //console.log(myValue)
		 if (myValue%2 == 0){
			 console.log("its even")
			 setBoxesListenersForO()
		 } else {
			 console.log("its odd")
			 setBoxesListenersForX()
		 }

	})
}




setBoxesListenersForX()

computerPlayerAlternator()






















});
