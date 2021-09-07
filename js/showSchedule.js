$(function(){

	let i=0;

	$('.schedule nav ul li').mouseenter(function(){
		i = ($(this).index())+1;

		$('.schedule nav ul li').css({
			"border-left":"none",
			"border-right":"none",
			"border-top":"none",
			"border-bottom":"1px solid #ddd"
		});

		$('.schedule nav ul li:hover').css({
			"border-left":"1px solid #ddd",
			"border-top":"1px solid #ddd",
			"border-right":"1px solid #ddd",
			"border-bottom":"none"
		});

		$(".showbox").hide();
		$(".showbox:nth-of-type"+"("+i+")").show().css({"display":"flex"});
	})
});