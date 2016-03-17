$(function () {

	if (window.location.pathname == '/canales/') {

		var origen = $('#lista-canales').html();

		// Compila a Handlebars
		var plantilla = Handlebars.compile(origen);
		
		// El destino de la plantilla
		var destino = $("#contenedor");

		// JSON inicial

		$.getJSON("canales.json",function(data){

			$.each(data.canales[0],function(index,element){

				$.each(this, function() {

						// Genera cada html por post
						var contenido = plantilla(this);

						// Muestra los post en la página
						destino.append(contenido);

				});
			});

		});




		$('li.canales__menu--item a').on('click', function(event){
			event.preventDefault()

			var posicion = $(this).parent().index()

			console.log( posicion)			

			if ( !$(this).hasClass('active')) {

				destino.empty()

				// Todos los datos en JSON

				$.getJSON("canales.json",function(data){

					$.each(data.canales[ posicion ],function(index,element){

						$.each(this, function() {

								// Genera cada html por post
								var contenido = plantilla(this)

								// Muestra los post en la página
								destino.append(contenido)

						})
					})

				})

				$(this).addClass('active').parent().siblings().children().removeClass('active')

			}

		})



	}



})