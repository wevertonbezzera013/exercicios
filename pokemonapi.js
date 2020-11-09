var botaoadicionar = document.querySelectorAll("#btn")
let contador = 1

botaoadicionar.addEventListener('click', function(){
    var pedido = new XMLHttpRequest()
    pedido.open("GET", "https://pokeapi.co/api/v2/pokemon" + contador)
    contador ++

    pedido.addEventListener('load', function(){
        console.log(contador)
        if(pedido.status == 200){
            var resposta = pedido.responseText
            var pokemon = JSON.parse(resposta)
            let imagem = nomepokemon.sprites.font_default
            let fonte = document.querySelectorAll("#pokemon").src = imagem
            let nomepokemon = document.querySelectorAll("#nomepokemon")
            nomepokemon.textContent = pokemon.name
            nomepokemon.style.fontSize = ("40px")
        } else{
            console.log(pedido.status)
            console.log(pedido.responseText)
        }
    })

    pedido.send()
})