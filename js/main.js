		document.addEventListener('DOMContentLoaded', function() {
		    var elems = document.querySelectorAll('.carousel');
		    var instance = M.Carousel.init(elems,{
		    	duration: 300,
		    	fullWidth: true,
		    	indicators: true
		    });

			var elemsMedia = document.querySelectorAll('.materialboxed');
   			var instances = M.Materialbox.init(elemsMedia);
		});

