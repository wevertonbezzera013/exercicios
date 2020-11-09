document.getElementById("busca").addEventListener("click", function(){
    let request = new XMLHttpRequest()
    request.addEventListener("load", function(){
        if(request.status == 200){
            let dados = JSON.parse(request.responseText).results[0]

            let usuario = {
                nome: dados.name.first + " " + dados.name.last,
                imagem: dados.picture.large
            }

            let card = document.createElement("div")

            card.innerHTML = `
            <img src = ${usuario.imagem}>
            <p>${usuario.nome}</p>
            `
            document.body.appendChild(card)

        }
    })

    request.open("GET", "https://randomuser.me/api", false)

    request.send()
})