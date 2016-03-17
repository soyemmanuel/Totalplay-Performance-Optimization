$(function(){

	$('.menu__mobile').click(function(){
		$(this).toggleClass('close');
		$('.menu__principal').toggleClass('is-show');

	})



	if(window.matchMedia("(max-width:600px)").matches){
		$(window).on('scroll', menuFijo);
		menuTouch();

		$('.menu__canales--wrap').on('click', function(){
			
			$('.canales__menu').fadeToggle().toggleClass('is-visible')
		})


		$('.paquetes__lista--info-titulo').on('click', function(){
			
			$(this).next('.info__contenido').toggleClass('is-show')
			$(this).parent().next('.paquetes__lista--detalles').toggleClass('is-show')
		})
	}

		$('.paquetes__titulo-js').on('click', function(){
			$(this).next('.info__detalles').toggleClass('is-show')
		})


	$('.bxslider').bxSlider({
		auto: true,
		mode: 'fade',
		controls: false
	})

	$('.terminos-js').on('click', function(event){
		event.preventDefault()
		$(this).prev('.promociones__item--info-terminos').slideToggle()
	})


	document.createElement( "picture" );


})




	/*==================================================*\
	    * Detectar el Scroll para Minimizar el menú *
	\*==================================================*/

	var $navTop = $('.logo').top;

	function menuFijo(){

		var $scrollTop = $(window).scrollTop();

		if($scrollTop > 100){

			$('.logo').addClass('mini');
			
		} else{
			$('.logo').removeClass('mini');
		}
		
	}


	/*==================*\
	    * Menú Touch *
	\*==================*/

	function menuTouch(){

		$('.header').hammer().on('panright', function(){
				$('.menu__principal').addClass('is-show');
				$('.menu__mobile').addClass('close');
					
		})


		$('.menu__principal, .header').hammer().on('panleft', function(){
				$('.menu__principal').removeClass('is-show');
				$('.menu__mobile').removeClass('close');
		})
	}






