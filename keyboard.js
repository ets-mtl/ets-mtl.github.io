$(function(){
	
	function onDocumentTouchMove(e){
		e.preventDefault();
		onDocumentTouchMove.x = e.touches[e.touches.length - 1].clientX;
    		onDocumentTouchMove.y = e.touches[e.touches.length - 1].clientY;
	};
	/*
	function onDocumentTouchEnd(e){
		e.preventDefault();
    		var elem = document.elementFromPoint(onDocumentTouchMove.x, onDocumentTouchMove.y);
   		$write.html($write.html() + elem.id);
	}*/
	
	document.ontouchmove = function(e){
    		e.preventDefault();
	};
	var $write;
	$('#Keyboard').hide();
	$('#writeL').on("touchend",function(){
		$('#Keyboard').show();
		return $write = $('#writeL');
	});
	$('#writeM').on("touchend",function(){
		$('#Keyboard').show();
		return $write = $('#writeM');
	});
	$('#writeR').on("touchend",function(){
		$('#Keyboard').show();
		return $write = $('#writeR');
	});
	/*$(document).on("touchstart", function(e){
		e.preventDefault();
		e.target
	});*/
	var lastItem;

	$('.key').on("touchmove", function(e){
		$write.html($write.html() + e.target.id);
	});
	
	$('.key').on("touchend", function(e){
		e.preventDefault();
		
		onDocumentTouchMove.x = e.changedTouches[e.changedTouches.length - 1].clientX;
    		onDocumentTouchMove.y = e.changedTouches[e.changedTouches.length - 1].clientY;
		
    		var elem = document.elementFromPoint(onDocumentTouchMove.x, onDocumentTouchMove.y);
		var character;
		var clickedItem = elem.id;
		
		switch (clickedItem) {
      case "Enter":
          $('#Keyboard').hide();
          character="";
        break;
      case "Return":
	  var html = $write.html();
	  $write.html(html.substr(0, html.length - 1));
	  character="";
        break;
      case "A":
          character = "A";
        break;  
      case "B":
          character = "B";
        break;
      case "C":
          character = "C";
        break;
      case "D":
          character = "D";
        break;  
      case "E":
          character = "E";
        break;
      case "F":
          character = "F";
        break;
      case "G":
          character = "G";
        break;  
      case "H":
          character = "H";
        break;
      case "I":
          character = "I";
        break;
      case "J":
          character = "J";
        break;  
      case "K":
          character = "K";
        break;
      case "L":
          character = "L";
        break;
      case "M":
          character = "M";
        break;  
      case "N":
          character = "N";
        break;
      case "O":
          character = "O";
        break;
      case "P":
          character = "P";
        break;  
      case "Q":
          character = "Q";
        break;
      case "R":
          character = "R";
        break;
      case "S":
          character = "S";
        break;  
      case "T":
          character = "T";
        break;
      case "U":
          character = "U";
        break;
      case "V":
          character = "V";
        break;  
      case "W":
          character = "W";
        break;
      case "X":
          character = "X";
        break;
      case "Y":
          character = "Y";
        break;  
      case "Z":
          character = "Z";
        break;
      default:
       	  character = "";
       }
   		$write.html($write.html() + character);
	});
/*
	document
	.getElementById("Enter")
	.addEventListener("click", function(){
		$write.html($write.html() + "Enter");
	});*/
});
