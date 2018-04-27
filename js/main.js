//Profile Cards
var fritz = document.getElementById('fritz');
var fran = document.getElementById('fran');
var bill = document.getElementById('bill');

fritz.innerHTML =	'<img src="' + profile[2].img + '">' + 
					"<h2>" + profile[2].name + "</h2>" +
					"<a href='mailto:" + profile[2].email + "'>" + profile[2].email + "</a>";

fran.innerHTML =	'<img src="' + profile[0].img + '">' + 
					"<h2>" + profile[0].name + "</h2>" +
					"<a href='mailto:" + profile[0].email + "'>" + profile[0].email + "</a>";

bill.innerHTML =	'<img src="' + profile[1].img + '">' + 
					"<h2>" + profile[1].name + "</h2>" +
					"<a href='mailto:" + profile[1].email + "'>" + profile[1].email + "</a>";
