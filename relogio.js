var data
var horas
var minutos
var segundos
function relogio(){
    data = new Date()
    horas = data.getHours()
    minutos = data.getMinutes()
    segundos = data.getSeconds()

    if(horas < 10){
        horas = "0" + horas
    }
    if(minutos < 10){
        minutos = "0" + minutos
    }
    if(segundos < 10){
        segundos = "0" + segundos
    }

    document.getElementById("relogio").innerHTML = horas + ":" + minutos + ":" + segundos
}
setInterval("relogio()", 1000)