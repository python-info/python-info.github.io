
$(document).ready(function(){

	$("nav ul li a").click(function(e){
		e.preventDefault();
		menuSwitch($(this).attr('href'));

		$("article").load("content/"+$(this).attr('href')+".html", function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")			
				format();
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	});	
	
	$("article").load("content/1.html");
	menuSwitch("1");
	
});
