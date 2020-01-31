$(document).ready(function() {
	$("form#input").submit(function(event) {
		event.preventDefault();
		var userInput = $("#userInput").val();

		var result = [];

		

		for(i=0; i<= userInput; i++) {
			if (i.toString().includes("3")) {
			result.push("I'm sorry, Dave. I'm afraid I can't do that.");
			} else if (i.toString().includes("2")) {
			result.push("Boop!");
			} else if (i.toString().includes("1")) {
			result.push("Beep!");
			} 
			else {
			result.push(" " +i);
			}
		}
		return result;


		event.preventDefault();
		
	});
	


});
