
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
						
						var src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js";	
						
							$.getScript(src, function () {				
								$('#format pre code').each(function(i, block) {
									hljs.highlightElement(block);	
									
									var current = $(this),
									lineStart = parseInt(current.data('line-start')),
									lineFocus = parseInt(current.data('line-focus')),
									items = current.html().split("\n"),
									total = items.length,
									result = '<ul ' + (!isNaN(lineStart) ? 'start="' + lineStart + '"' : '') + '>';
									
									for (var i = 0; i < total; i++) {
										
										if (i === (lineFocus - lineStart)) {
											result += '<li class="li">';
										} else {
											result += '<li class="li">' + ' <span style=\"font-size:30px;\">|</span>';
										}
										
									result += items[i] + '</li>';
									}
									result += '</ul>';
									current.empty().append(result);
								});
							});
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
