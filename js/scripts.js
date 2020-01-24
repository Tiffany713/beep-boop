$(document).ready(function() {
	$(form#input).submit(function(event){
		event.preventDefault();

		
		var number = $(#num).val();
		var result = [];
		

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
	}

	// $(".list").text(result);



	});
});
