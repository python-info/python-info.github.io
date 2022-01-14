
$(document).ready(function(){
	$("nav ul li a").click(function(e){
		e.preventDefault();
		var x = $(this).attr('href');
		menuSwitch(x);

		$("article").load("content/"+$(this).attr('href')+".html", function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")			
				if(x!=12){
					format();
				}
				else{
					$("#btnSave").click(function() {
					$("#img-out").html("");
						html2canvas($("#format")[0]).then((canvas) => {
						$("#img-out").append(canvas);
						});
					});

					$("#btnFormat").click(function() {
						$("#format").html("");
						$("#img-out").html("");
					        $("code").html($("#textarea").val());
						$("#format").html($("#code").html());
						format();
						$("code")[0].innerHTML = "";								
					});	
				}				
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});	
	});
	
	$("article").load("content/1.html");
	menuSwitch("1");
	
});
