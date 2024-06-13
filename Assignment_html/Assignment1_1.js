//find average
function main(){
	"use strict"; //
	
	//actual argument
	var a,b,c;
	
	
	a = parseInt(prompt("Enter the Maths subject marks : "));
	//data type validation
	if(isNaN(a)){
		document.write("Maths marks must be enter and must be numeric.");
		return;
	}
	//input validation
	if(a < 0 || a > 100){
		document.write("Maths marks must be in range 0 to 100.");
		return;
	}
	
	
	b = parseInt(prompt("Enter the Physics subject marks : "));
	if(isNaN(b)){
		document.write("Physics marks must be enter and must be numeric.");
		return;
	}
	if(b < 0 || b > 100){
		document.write("Physics marks must be in range 0 to 100.");
		return;
	}
	
	
	
	c = parseInt(prompt("Enter the Chemistry subject marks : "));
	if(isNaN(c)){
		document.write("Chemistry marks must be enter and must be numeric.");
		return;
	}
	if(c < 0 || c > 100){
		document.write("Chemistry marks must be in range 0 to 100.");
		return;
	}
	
	
	
	var result,presult;
	result = find_average(a,b,c);
	//document.write("Student PCM marks average : ",result.toFixed(2));
	
	//most used function in js -->  document.getElementById()
	//variable_name(this name is js file defind name) = document.getElementById(id_name(this name html id name))
	//this function use to id call 
	presult=document.getElementById("presult");
	
	//veriable_name.innerHTML = "..."
	presult.innerHTML="Student PCM marks average : " + result.toFixed(2);
	
	
}

function find_average(x,y,z){
	"use strict";
	//formal argument
	var average;
	average=(x+y+z)/3;
	return average;
	
}

main();