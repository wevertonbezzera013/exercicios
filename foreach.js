const img = document.getElementById('img')
const btn = document.getElementById('btn')

let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight );

// let meuObjeto = {
//     arr: [ 1, 2, 3 ],

//     forEach: function(callback){
//         for(let i = 0; i < callback.length; i++){
//             console.log(this.arr[i])
//             callback(this.arr[i])
//         }
//     }
// }

// function printaQuadrado( callback ){
//     console.log( callback * callback)
// }

// function printaMetade( callback ){
//     console.log( callback / 2 )
// }

// meuObjeto.forEach(printaQuadrado)
// meuObjeto.forEach(printaMetade)