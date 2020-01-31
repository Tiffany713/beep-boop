$(document).ready(function() {
	$("form#input").submit(function(event) {
		var userInput = $("#userInput").val();
	
		userInput.splice("userResult","userInput","Boop!")
		
		// console.log(number);

		result = [];

		// for(i=0; i<= userInput; i+= 1) {
		// 	if (userInput[i] === "1") {
		// 		result += "Boop!";
		// } else if (userInput[i] === "2") {
		// 		result += "Beep!";
		// } else if (userInput[i] === "3") {
		// 		result += "I'm sorry, Dave. I'm afraid I can't do that.";	
		// } else { result += userInput[i]; 
		
		// 	$(".userResult").text(result);

		for(i=0; i<= userInput; i+= 1) {
			if (i.toString().includes("1")) {
			result.push("Beep!");
			} else if (i.toString().includes("2")) {
			result.push("Boop!");
			} else if (i.toString().includes("3")) {
			result.push("I'm sorry, Dave. I'm afraid I can't do that.");
			} 
			else {
			result.push(" " +i);
			}
		}
		return result;


		event.preventDefault();
		
	});
	


});
