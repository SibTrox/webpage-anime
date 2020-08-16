document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems,{
		duration: 300,
		fullWidth: true,
		indicators: true
	});

	var elemsMedia = document.querySelectorAll('.materialboxed');
	var instances = M.Materialbox.init(elemsMedia);

	var lainFooter = document.getElementById("lain-footer");
	lainFooter.onclick = function(background){
		var background = ["bg_main1", "bg_main2", "bg_main3", "bg_main4", "bg_main5"];
		var body = document.getElementById("body-page");
		for (var i = 0; i < background.length; i++) {
			if(body.className == background[i]){
				if(i == 4){
					body.className = "bg_main1";
					break
				}else{
					console.log(background[i+1])
					body.className = background[i+1];
					break
				}
			}
		 }
	}
});