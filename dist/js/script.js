$(function(){

	$('.btn-menu').click(function(){
	$('.menu ul').slideToggle();
	});
	
    $(".owl-carousel").owlCarousel({
    	items: 3,
    	itemsDesktop: [1199,2],
    	itemsDesktopSmall: [979,2],
    	itemsTablet: [768,1],
    	navigation: true,
    	slideSpeed: 1000,
    	rewindSpeed: 1500,
    	navigationText:['',''],
	});

	$("#menu, #scroll, #watch").on("click","a", function (event) {
	    //отменяем стандартную обработку нажатия по ссылке
	    event.preventDefault();
	    //забираем идентификатор бока с атрибута href
	    var id  = $(this).attr('href'),
	    //узнаем высоту от начала страницы до блока на который ссылается якорь
	        top = $(id).offset().top;
	    //анимируем переход на расстояние - top за 1500 мс
	    $('body,html').animate({scrollTop: top}, 1500);
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});