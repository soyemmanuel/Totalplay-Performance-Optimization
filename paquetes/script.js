$(function(){
	if (window.location.pathname == '/paquetes/') {
		var origen = $('#botones-paquetes').html();

		// Compila a Handlebars
		var plantilla = Handlebars.compile(origen);
		
		// El destino de la plantilla
		var destino = $("#contenedor");


		$('.land').on('click', function(){
			destino.prepend(origen)
			$('.paquetes__botones').fadeIn().addClass('is-show');

			$('.paquetes__botones').on('click', function(){
				$(this).removeClass('is-show').delay(1500).queue(function() { $(this).remove(); });
			
				$('.page-title__paquetes h2').text('Por favor selecciona tu ciudad de residencia')

				window.location.hash = '';

			})

			$('.page-title__paquetes h2').text('Paquetes disponibles para ' + $(this).attr('title'))

			window.location.hash = $(this).attr('title');

			listaPaquetes()
		})

		$('.land.active').on('mouseover', function(){
			var nombreCiudad = $(this).attr('title')
			
			$('.nombre__ciudad p').text(nombreCiudad)

		})
	}


})


function listaPaquetes(){


	var origenLista = $('#lista-paquetes').html();

	// Compila a Handlebars
	var plantillaLista = Handlebars.compile(origenLista);
	
	// El destino de la plantilla
	var destinoLista = $("#contenedor");


	$('.paquetes__botones--link').on('click', function(event){
		event.preventDefault();
		destinoLista.html(origenLista)

		window.location.hash = $(this).attr('title');


		$('.paquetes__titulo-js').on('click', function(){
			$(this).next('.info__detalles').toggleClass('is-show')
		})

		$('.paquetes__lista--info-titulo').on('click', function(){
			$(this).next('.info__contenido').toggleClass('is-show')
			$(this).parent().siblings('.paquetes__lista--detalles').toggleClass('is-show')
		})
	})


}
