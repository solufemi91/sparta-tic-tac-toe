$(function(event) {
//
// // create eventlistner for any box that is clicked
//
// // Top row
// $('#top-row1').click(function(){
//   $('#top-row1').html('x')
// })
//
// $('#top-row2').click(function(){
//   $('#top-row2').html('x')
// })
//
// $('#top-row3').click(function(){
//   $('#top-row3').html('x')
// })
//
// // Middle row
// $('#middle-row1').click(function(){
//   $('#middle-row1').html('x')
// })
//
// $('#middle-row2').click(function(){
//   $('#middle-row2').html('x')
// })
//
// $('#middle-row3').click(function(){
//   $('#middle-row3').html('x')
// })
//
//
// // bottom row
//
// $('#bottom-row1').click(function(){
//   $('#bottom-row1').html('x')
// })
//
// $('#bottom-row2').click(function(){
//   $('#bottom-row2').html('x')
// })
//
// $('#bottom-row3').click(function(){
//   $('#bottom-row3').html('x')
// })


// now shorten the code with use of a loop
// a) get elements by class with jquery

//  var boxesArray = $('.boxes')
//
//
// function setBoxesListeners(boxesArray){
//   for(var i = 0; i < boxesArray.length; i++){
//     $(boxesArray[i]).click(function(){
//       $(boxesArray[i]).html('x')
//     })
//   }
// }

function setBoxesListeners(){
	//You can put the listener straight on the boxes array
	//This will add the listener to all the elements with a class of boxes
	$('.boxes').click(function(){
		//Then you can target the box you clicked using this
		//this is the the one you clicked
		$(this).html('X')
	})
}

setBoxesListeners()



});
// create an event listner that changes who's turn it is each time
