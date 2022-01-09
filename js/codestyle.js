$(document).ready(function(){
	
	var src1 = "js/highlight.min.js"/*"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"*/;
	var src2 = "js/highlightjs-line-numbers.min.js"/*"https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"*/;		
	
	$("article").load("content/1.html");
			menuSwitch("1");
	
	
	$("nav ul li a").click(function(e){
		e.preventDefault();
		menuSwitch($(this).attr('href'));


		$("article").load("content/"+$(this).attr('href')+".html");
		
		color();
		//nie zawsze kod zosatnie sformatowany poprawnie
		for(;;){
		if($('code.hljs')==null) color();
		else break;
		}

		/*$.getScript(src1, function () {
			$('pre > code').each(function(i, block) {
				hljs.highlightElement(block);		
			});
		});	
		
		$.getScript(src2, function () {
			$('code.hljs').each(function(i, block) {
				hljs.lineNumbersBlock(block);	
			});
		});*/
		
	});
});



function color(){
	 
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
 }
