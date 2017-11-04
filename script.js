$(function(event) {

var counter= 0;

function setBoxesListeners() {

	$('.boxes').click(function(){

		if($(this).html() == ''){
		counter = turnDisplay();
		console.log(counter);
		if (counter%2 == 0) {
			$(this).html('O')
			$('#turn').html('X')} else{
				$(this).html('X')
				$('#turn').html('O')}
		}
	})
}

function resetBoardListener(){
	$('button').click(function(){

		 $(".boxes").html('')
	})
}

function turnDisplay(){
		return counter += 1;
}



setBoxesListeners();

resetBoardListener();




















});
