$(function(event) {

var counter = 0;

function turnCounter(){
		return counter += 1;
}




function setBoxesListenersForX(){

	$('.boxes').click(function(){
		$(this).html('X')
	})
}



function setBoxesListenersForO(){

	$('.boxes').click(function(){
		$(this).html('O')
		// change who's turn it is
		var myValue = turnCounter()
		console.log(myValue)
		if (myValue%2 == 0) {
			$('#turn').html('O')

		} else {
			$('#turn').html('X')
		}

		//
		// }
	})
}


//  everytime i click, I want the turns to alternate between x and y



setBoxesListenersForX()
setBoxesListenersForO()

//

$





















});
