var $ = window.jQuery
var page = window.page

page('/', home)
page('/signin', signin)

page()

function home(){
	console.log('Estoy navegando al home')
}

function signin(){
	$('.boton').on('click', function (event){
		event.preventDefault()
		console.log('Estoy navegando a signin')
		page('/')
	})
}