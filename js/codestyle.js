
	$(document).ready(function(){
	
	var src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js";	
	
	
	$("nav ul li a").click(function(e){
		e.preventDefault();
		menuSwitch($(this).attr('href'));
		$("article").load("content/"+$(this).attr('href')+".html")

		$.getScript(src, function () {
			$('pre > code').each(function(i, block) {
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
		
	});
	
	$("article").load("content/1.html");
	menuSwitch("1");
	
});
