$("button").click( function() {
	
	$.getJSON("js/json_data.json", function(obj) {
	
	$.each(obj, function(key, value) {
		$("ul").append("<li id='light'>"+value.light+"<li>")
		$("ul").append("<li id='time'>"+"Last checked: "+value.timestamp+"<li>")
		$("ul").append("<li id='location'>"+"Location: "+value.location+"<li>")
	});	
	
	});
	
});