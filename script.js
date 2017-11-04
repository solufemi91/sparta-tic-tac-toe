$(function(event) {

var counter= 0;

var $arrayOfClickedBoxes = []

function setBoxesListeners(){

	$('.boxes').click(function(){
		var counter = turnDisplay()
		console.log(counter)
		if (counter%2 == 0) {
			if($(this).html() == ''){
			$(this).html('O')
			$('#turn').html('X')
			$arrayOfClickedBoxes.push($(this).attr('data-num'))
			console.log($arrayOfClickedBoxes)}

		} else { // if the thing that is clicked is not in the array, excute block of code
			// or if the thing that is clicked is empty, execute code
			if($(this).html() == ''){
			$(this).html('X')
			$('#turn').html('O')
			$arrayOfClickedBoxes.push($(this).attr('data-num'))
			console.log($arrayOfClickedBoxes)}



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

//make sure that if a box is clicked it cannot be clicked again

// once a box has been clicked, take note of that particular box

// how are the boxes distinguished?
//the data-num attribute

setBoxesListeners();

resetBoardListener();




















});
