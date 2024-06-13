//find average
function main(){
	"use strict"; //
	
	var a,b;
	
	a = parseInt(prompt("Enter the first integer : "));
	if(isNaN(a)){
		document.write("Invalid integer.");
		return;
	}
	
	b = parseInt(prompt("Enter the seccond integer : "));
	if(isNaN(b)){
		document.write("Invalid integer.");
		return;
	}
	document.write("first and second integer before swapping : ",a ," and " , b);
	
	
	var result1,result2,presult;
	result1 = integer(a);	
	result2 = integer(b);
	presult=document.getElementById("presult");
	presult.innerHTML="first and second integer after swapping : " + result2 + " and " +result1;
	
	
}


function integer(x,y){
	"use strict";
	//formal argument
	var x,y;
	x=x+y;
	y=x-y;
	x=x-y;
	return x,y;
	
}

main();