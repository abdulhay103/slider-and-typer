;(function(jQuery){
	$(document).ready(function(){
	var typer = new Typer({
	    elem: '.example',
	    typeText: ["I'm A Front_End Web Designer...", "I'm A Web Developer...", "I'm A Creative Thinker..."],
	    repeat: Infinity,
	    interval: 150,
	    delay: 1000,
	    typingLine: false,
	    deleteOnFinish: true,
	    hideLineOnFinish: false,
	});
	typer.reload(newOptions);
});
})(jQuery);