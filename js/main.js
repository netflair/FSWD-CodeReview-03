//PROFILE CARDS ---------------------------------------------------------------------
var fritz = document.getElementById('fritz');
var fran = document.getElementById('fran');
var bill = document.getElementById('bill');
//Resource: ./main.json
//Get-Output Data for Fritz
fritz.innerHTML = '<img src="' + profile[2].img + '">' +
    "<h2>" + profile[2].name + "</h2>" +
    "<a href='mailto:" + profile[2].email + "'>" + profile[2].email + "</a>";
//Get-Output Data for Fran
fran.innerHTML = '<img src="' + profile[0].img + '">' +
    "<h2>" + profile[0].name + "</h2>" +
    "<a href='mailto:" + profile[0].email + "'>" + profile[0].email + "</a>";
//Get-Output Data for Bill
bill.innerHTML = '<img src="' + profile[1].img + '">' +
    "<h2>" + profile[1].name + "</h2>" +
    "<a href='mailto:" + profile[1].email + "'>" + profile[1].email + "</a>";


//MODAL BOX -------------------------------------------------------------------------
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Open Modal
modalBtn.onclick = function openModal() {
    modal.style.display = "block";
};

//Close modal
closeBtn.onclick = function closeModal() {
    modal.style.display = "none";
};
//Close when clicking outside
window.onclick = function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};


//CALCULATIONS ---------------------------------------------------------------------
var submit = document.getElementById('submit');
var result = document.getElementById('result');

submit.addEventListener('click', calculateInsurance, false);

function calculateInsurance() {
    //Get Values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var power = document.getElementById('power').value;
    var country = document.getElementById('country').value;

    //Get Error Boxes
    var errName = document.getElementById('errName');
    var errAge = document.getElementById('errAge');
    var errPower = document.getElementById('errPower');
    var errCountry = document.getElementById('errCountry');

    //Get default selected country
    var x = document.getElementById("country").selectedIndex;
    var y = document.getElementsByTagName("option");

    //Validation-----------------------------
    //Check Name
    if (name == "") {
        errName.innerHTML = "Please enter your name.<br>";
    } else {
        errName.innerHTML = "";
    }
    //Check Age
    if (age == "") {
        errAge.innerHTML = "Please enter your age.";
    } else if (isNaN(age)) {
        errAge.innerHTML = "Must be a Number.";
    } else {
        errAge.innerHTML = "";
    }
    //Check Country
    if (y[x].defaultSelected == true) {
        errCountry.innerHTML = "Please choose your country.";
    } else {
        errCountry.innerHTML = "";
    }
    //Check Power
    if (power == "") {
        errPower.innerHTML = "Please enter your Horsepower.";
    } else if (isNaN(power)) {
        errPower.innerHTML = "Must be a Number.";
    } else {
        errPower.innerHTML = "";
    }

    //IF not validated = Output Check Data ELSE start calc
    if (name == "" || age == "" || isNaN(age) || y[x].defaultSelected == true || power == "" || isNaN(power)) {
        result.innerHTML = "Please check your data.";
    } else {

        //calc based on selected option if validation passes
        switch (country) {
            case "austria":
                var aResult = power * 100 / age + 50;
                result.innerHTML = name + ", your insurance costs: " + aResult;
                break;

            case "germany":
                var gResult = power * 100 / age + 100;
                result.innerHTML = name + ", your insurance costs: " + gResult;
                break;

            case "italy":
                var iResult = power * 100 / age + 150;
                result.innerHTML = name + ", your insurance costs: " + iResult;
                break;

            default:
                result.innerHTML = "Please check your data.";
        }
    }
}