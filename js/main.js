//Profile Cards ---------------------------------------------------------------------
var fritz = document.getElementById('fritz');
var fran = document.getElementById('fran');
var bill = document.getElementById('bill');
//Get Data for Fritz
fritz.innerHTML =	'<img src="' + profile[2].img + '">' + 
					"<h2>" + profile[2].name + "</h2>" +
					"<a href='mailto:" + profile[2].email + "'>" + profile[2].email + "</a>";
//Get Data for Fran
fran.innerHTML =	'<img src="' + profile[0].img + '">' + 
					"<h2>" + profile[0].name + "</h2>" +
					"<a href='mailto:" + profile[0].email + "'>" + profile[0].email + "</a>";
//Get Data for Bill
bill.innerHTML =	'<img src="' + profile[1].img + '">' + 
					"<h2>" + profile[1].name + "</h2>" +
					"<a href='mailto:" + profile[1].email + "'>" + profile[1].email + "</a>";


//Modal Box ---------------------------------------------------------------------
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Open Modal on BtnClick
modalBtn.onclick = function openModal() {
	modal.style.display = "block";
};

//Close modal on CloseIconClick
closeBtn.onclick = function closeModal() {
	modal.style.display = "none";
};
//Close when clicking outside
window.onclick = function outsideClick(e) {
	if(e.target == modal){
		modal.style.display ="none";
	}
};


//Calculations ---------;------------------------------------------------------------
var name = document.getElementById('name').value;
var age = Number(document.getElementById('age').value);
var country = document.getElementById('country').value;
var power = document.getElementById('power');