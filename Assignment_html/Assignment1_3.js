//find average
function main(){
	"use strict"; //
	
	var a,b;
	
	a = parseInt(prompt("Enter the length of rectangle : "));
	if(isNaN(a)){
		document.write("Invalid length.");
		return;
	}
	
	b = parseInt(prompt("Enter the breadth of rectangle : "));
	if(isNaN(b)){
		document.write("Invalid breadth.");
		return;
	}
	
	var result1,result2,presult;
	result1 = find_area(a,b);
	result2 = find_perimeter(a,b);	
	presult=document.getElementById("presult");
	presult.innerHTML="Area of rectangle : " + result1.toFixed(2)+" <br>perimeter of rectangle : " + result2.toFixed(2);
	
	
}

function find_area(x,y){
	"use strict";
	//formal argument
	var area;
	area=x*y;
	return area;
	
}
function find_perimeter(x,y){
	"use strict";
	//formal argument
	var perimeter;
	perimeter=2*(x+y);
	return perimeter;
	
}

main();