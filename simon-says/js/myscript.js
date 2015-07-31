/*
$("button").click( function() {
	
	$.getJSON("js/json_data.json", function(obj) {
	
	$.each(obj, function(key, value) {
		$("ul").append("<li id='light'>"+value.light+"<li>")
		$("ul").append("<li id='time'>"+"Last checked: "+value.timestamp+"<li>")
		$("ul").append("<li id='location'>"+"Location: "+value.location+"<li>")
	});	
	
	});
	
});
*/

$("button").click(function(){
    $.ajax({url: "https://data.sparkfun.com/output/3J56bXndRaCrJpyx8jM8.json", success: function(result){
        
        
        for(var y=0;y < result.length;y++){
	        $("#results").append('<p>High Score</p>', result[y].high_score_game[0]);
	        
        }
        
    }});
});