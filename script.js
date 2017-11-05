$(function(event) {

var counter = 0;

var ArrayForOMoves = [];

var ArrayForXMoves = []

function setBoxesListeners() {

	$('.boxes').click(function(){


		if($(this).html() == ''){

		counter = turnDisplay();
		// console.log(counter);
		if (counter%2 == 0) {
			$(this).html('O');
			$('#turn').html('X');
			ArrayForOMoves.push($(this).attr('data-num'));
			checkWinningCondition();
			console.log("player0 " + ArrayForOMoves)


		} else {
				$(this).html('X');
				$('#turn').html('O');
				ArrayForXMoves.push($(this).attr('data-num'));
				checkWinningCondition();
				console.log("playerX " + ArrayForXMoves)

			};
		}


	})

}

function resetBoardListener(){
	$('button').click(function(){

		 $(".boxes").html('')
		 ArrayForOMoves = []

		 ArrayForXMoves = []

	})
}

function turnDisplay(){
		return counter += 1;
}

function checkWinningCondition(){
 if(ArrayForXMoves.length > 2)

 {
  alert(ArrayForXMoves)
  } else if (ArrayForOMoves.length > 2) {
 alert(ArrayForOMoves)
 }



}

setBoxesListeners();

resetBoardListener();




});
