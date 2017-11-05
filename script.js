$(function(event) {

var counter = 0;

var ArrayForOMoves = [];

var ArrayForXMoves = []

var matchCounter = 0;

var $winCombinations = $([[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]);

function setBoxesListeners() {

	$('.boxes').click(function(){


		if($(this).html() == ''){

		counter = turnDisplay();
		console.log(counter);
		if (counter%2 == 0) {
			$(this).html('O');
			$('#turn').html('X');
			ArrayForOMoves.push(parseInt($(this).attr('data-num')));
			checkWinningCondition(ArrayForOMoves,"O");
			// console.log("player0 " + ArrayForOMoves)



		}

		else if(counter == 9){
			$('#turn').html("Game Over!");
			var conf = confirm("It's a draw, do you want to play again?");
			if(conf){
				resetBoardListener();
			}

		}

		else {
				$(this).html('X');
				$('#turn').html('O');
				ArrayForXMoves.push(parseInt($(this).attr('data-num')));
				checkWinningCondition(ArrayForXMoves,"X");
				// console.log("playerX " + ArrayForXMoves)

			};


		}


	})

}

function resetBoardListener(){
	$('button').click(function(){

		 $(".boxes").html('')
		 ArrayForOMoves = []

		 ArrayForXMoves = []

		 counter = 0;

		 $('#turn').html("X");



	})
}

function turnDisplay(){
		return counter += 1;
}

function checkWinningCondition(arrayMoves, player){
	$winCombinations.each(function(index,combination){
		matchCounter = 0;
		$(combination).each(function(index,winningBox){
			if(arrayMoves.indexOf(winningBox) !== -1){
				matchCounter++
			}
			if(matchCounter === 3){
				alert("Game over,  " + player + "wins!");
				counter = 0;
				resetBoardListener();

			}
		})
	})




}

setBoxesListeners();





});
