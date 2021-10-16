//The following function is for updating the number next to the slider when is it changed

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//This funtion is what happens when the button is clicked
function compute()
{
var r = document.getElementById("rate").value; //This variable links to the rate element of the form
var principal = document.getElementById("principal").value; //This one will look for the amount on which the interest is calculated
var years = document.getElementById("years").value; //This will look for the number of years
var interest = principal * years * r /100; //This calculate the interest
var year = new Date().getFullYear()+parseInt(years); // This will transform the number of years into a date starting now

if(principal<=0){
            alert("Enter a positive number.");
            username.focus(); } 
//This if function will check if the num is a positive number. If not, it will display an alert message.
	else {
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark><br>at an interest rate of <mark>" + r + "%</mark><br>You will receive an amount of <mark>" + interest +"</mark><br>in the year <mark>" + year +"</mark>"; 
//This is the text that the user will see, with the numbers they entered and the calculated results
} }
