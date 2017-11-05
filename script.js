$(function(event) {

var counter = 0;

var combinationsArrayForO = [];

var combinationsArrayForX = []

function setBoxesListeners() {

	$('.boxes').click(function(){


		if($(this).html() == ''){

		counter = turnDisplay();
		// console.log(counter);
		if (counter%2 == 0) {
			$(this).html('O');
			$('#turn').html('X');
			combinationsArrayForO.push($(this).attr('data-num'));
			checkWinningCondition();
			console.log("player0 " + combinationsArrayForO)


		} else {
				$(this).html('X');
				$('#turn').html('O');
				combinationsArrayForX.push($(this).attr('data-num'));
				checkWinningCondition();
				console.log("playerX " + combinationsArrayForX)

			};
		}


	})

}

function resetBoardListener(){
	$('button').click(function(){

		 $(".boxes").html('')
		 combinationsArrayForO = []

		 combinationsArrayForX = []

	})
}

function turnDisplay(){
		return counter += 1;
}

function checkWinningCondition(){
	if(combinationsArrayForX.length > 2)

	{
  alert(combinationsArrayForX)
  } else if (combinationsArrayForO.length > 2) {
	alert(combinationsArrayForO)
 }



}

setBoxesListeners();

resetBoardListener();




});
