$.ajax({
	url: 'assets/js/produtos.json',
	type: 'GET',
	success: function (produtos) {

		var k, x = '';

		for (k in produtos) {

			x += '<div class="item">';
			x += '<div class="box-produto-item">';
			x += '<figure class="box-produto-image">';
			x += '<img src=\"assets/media/images/tenis-couro-puma.png\" alt=\"Tênis Couro Puma R698 Q4 V2\" height=\"150\">';
			x += '</figure>';

			x += '<div class="box-produto-description">';
			x += '<h3>' + produtos[k].titulo + '</h3>';
			x += '<p class=\"rating\"><img src="assets/media/images/rating.png" alt="Avaliação do Produto"></p>';
			x += '<p class=\"price-start\">de R$ ' + produtos[k].price_start + ',00</p>';
			x += '<p class=\"price-end\">por R$ ' + produtos[k].price + ',00</p>';
			x += '<p class=\"price-financing\">' + produtos[k].parcel + '</p>';
			x += '<button class=\"btn-comprar\" alt=\"Comprar\"> Comprar</button>';
			x += '</div>';
			x += '</div>';
			x += '</div>';
		}


		$(".lista-produtos").html(x);

		// carousel produtos
		$('#owl-carousel-produtos').owlCarousel({
			loop: true,
			margin: 20,
			autoplay: true,
			dots: true,
			dotsData: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			autoHeight: true,
			responsive: {
				0: {
					items: 2,
				},
				800: {
					items: 4,
					loop: true
				}
			}
		});

		$('.carousel-produtos .owl-dot').click(function () {
			owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
		})

		var owl = $('#owl-carousel-produtos');

		owl.owlCarousel();
		// Go to the next item
		$('.owl-btn-next').click(function () {
			owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.owl-btn-prev').click(function () {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			owl.trigger('prev.owl.carousel', [300]);
		})
	}
});
