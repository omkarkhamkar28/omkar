//find average
function main(){
	"use strict"; //
	
	var a,b;
	
	a = parseInt(prompt("Enter the base of triangle : "));
	if(isNaN(a)){
		document.write("Invalid base.");
		return;
	}
	
	b = parseInt(prompt("Enter the height of triangle : "));
	if(isNaN(b)){
		document.write("Invalid height.");
		return;
	}
	
	var result,presult;
	result = find_area(a,b);

	presult=document.getElementById("presult");
	presult.innerHTML="Area of triangle : " + result.toFixed(2);
	
	
}

function find_area(x,y){
	"use strict";
	//formal argument
	var area;
	area=0.5*(x*y);
	return area;
	
}

main();