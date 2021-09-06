$(function(){

	var $write;
	$('#keyboard').hide();

	$('#writeL').on("touchend",function(){
		$('#keyboard').show();
		return $write = $('#writeL');
	});

	$('#writeM').on("touchend",function(){
		$('#keyboard').show();
		return $write = $('#writeM');
	});

	$('#writeR').on("touchend",function(){
		$('#keyboard').show();
		return $write = $('#writeR');
	});
	
	$('#keyboard li').on("touchend",function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		
		// Delete
		if ($this.hasClass('deleteL') || $this.hasClass('deleteR')) {
			var html = $write.html();
			
			$write.html(html.substr(0, html.length - 1));
			return false;
		}
		
		// Enter
		if ($this.hasClass('returnL') || $this.hasClass('returnR')) {

			$('#keyboard').hide();
			return false;
		}
		
		// Add the character
		$write.html($write.html() + character);
	});
});
