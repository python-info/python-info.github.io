function format(){
	
	var src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js";	
	
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
					result += '<li class="li">' + ' <span style=\"font-size:30px;\">&nbsp|</span>';
				}
				
			result += items[i] + '</li>';
			}
			result += '</ul>';
			current.empty().append(result);
			
		});
	});	
}
