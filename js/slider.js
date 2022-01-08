var numer;

$(document).ready(function(){
	numer = Math.floor(Math.random()*3)+1;
	zmien();
});


	function schowaj(){
	$("#slider").fadeOut(500);
	}
	
	function zmien(){
	numer++;
	if(numer>3)numer=1;
		
	var plik = "<img id=\"obrazek\" src=\"slajdy/slajd"+numer+".png\"/>";
		
	document.getElementById("slider").innerHTML = plik;
	$("#slider").fadeIn(500);
		
		
	setTimeout("zmien()",3000);
	setTimeout("schowaj()",2500);
	}


	