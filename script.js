$(function(event) {

var counter= 0;


function turnDisplay(){
		return counter += 1;
}


function setBoxesListeners(){

	$('.boxes').click(function(){
		var myValue = turnDisplay()
		if (myValue%2 == 0) {
			$(this).html('O')
			$('#turn').html('X')

		} else {
			$(this).html('X')
			$('#turn').html('O')

		}


	})
}

function resetBoardListener(){
	$('button').click(function(){
     console.log("Reset")
		 $(".boxes").html('')
	})
}

setBoxesListeners()
resetBoardListener()





















});
