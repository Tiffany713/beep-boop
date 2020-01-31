

$(document).ready(function() {
	$("#input").submit(function(event) {
		event.preventDefault();
		var userInput = parseInt($("#userInput").val());
		$('#results').text(beepBoop(userInput));

	});
});


function beepBoop(userInput) {
	
	var results = [];
	
	for(var i = 0; i <= userInput; i++) {
		if (i.toString().includes("3")) {
			results.push("I'm sorry, Dave. I'm afraid I can't do that.");
		} else if (i.toString().includes("2")) {
			results.push("Boop!");
		} else if (i.toString().includes("1")) {
			results.push("Beep!");
		} else {
			results.push(i);
		}
	}
	return results;
}



