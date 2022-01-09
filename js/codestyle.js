$(document).ready(function(){
	
	
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
		
	});
});

var src1 = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js";
var src2 = "https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js";		
	

function color(){
	 
$.getScript(src1, function () {
			$('pre > code').each(function(el) {
				hljs.highlightElement(el);		
			});
		});	
		
		$.getScript(src2, function () {
			$('code.hljs').each(function(el) {
				hljs.lineNumbersBlock(el);	
			});
		});
 }
