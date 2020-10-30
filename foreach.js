let meuObjeto = {
    arr: [ 1, 2, 3 ],

    forEach: function(callback){
        for(let i = 0; i < callback.length; i++){
            console.log(this.arr[i])
            callback(this.arr[i])
        }
    }
}

function printaQuadrado( callback ){
    console.log( callback * callback)
}

function printaMetade( callback ){
    console.log( callback / 2 )
}

meuObjeto.forEach(printaQuadrado)
meuObjeto.forEach(printaMetade)