$(function(event) {

var counter= 0;

var combinationsArrayForO = []

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
			console.log("player0 " + combinationsArrayForO)

		} else {
				$(this).html('X');
				$('#turn').html('O');
				combinationsArrayForX.push($(this).attr('data-num'));
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

	if (combinationsArrayForX == [0,3,6]){
		alert("player X has won")
	}




}

setBoxesListeners();

resetBoardListener();

checkWinningCondition()



});
