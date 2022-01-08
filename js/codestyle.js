$(document).ready(function(){
	
	var src1 = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js";
	var src2 = "https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js";
	
	//pewność że kolorowanie kodu zawsze się wyświetli
	/*const menuItem = document.querySelectorAll('nav ul li a');
	const menuLength = menuItem.length;
	for(let i=0; i<menuLength; i++){
		$("article").load("content/"+(i+1)+".html");
		$.getScript(src1, function () {
			$('pre > code').each(function(i, block) {
				hljs.highlightElement(block);	
				$.getScript(src2, function () {
					$('code.hljs').each(function(i, block) {
						hljs.lineNumbersBlock(block);
					});
				});
			});
		});	
	}*/
	
	$("article").load("content/1.html");
			menuSwitch("1");
	
	
	$("nav ul li a").click(function(e){
		e.preventDefault();
		menuSwitch($(this).attr('href'));


		$("article").load("content/"+$(this).attr('href')+".html");

		$.getScript(src1, function () {
			$('pre > code').each(function(i, block) {
				hljs.highlightElement(block);	
				$.getScript(src2, function () {
					$('code.hljs').each(function(i, block) {
						hljs.lineNumbersBlock(block);
					});
				});
			});
		});				
	});
});
