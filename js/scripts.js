$(document).ready(function() {
	$(form#input).submit(function(){
		var num = $(#num).val();
		$("#list").hide();
		result = " ";
		var num
		var beep = "Beep!"
		var boop = "Boop!"
		var dave = "I'm sorry, Dave. I'm afraid I can't do that."
		
		var number = ["0", "1", "2", "3", "4", "5"];
		number.splice(1, num.length - 1, "Boop!");
		console.log(number);
// var total
// 		for(i =0; i<= 9; i+= 1) {
// 			if (number[i] === 1) {
// 			result += var beep;
// 		}
// 	}

	// $(".list").text(result);

	event.preventDefault();

	});
});
