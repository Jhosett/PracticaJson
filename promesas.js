function sumar(acumulado, valor, callback) {

    let suma
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if (valor == 2) return reject ({msg:'No me gusta el numero 2'})
            suma = acumulado + valor
            resolve(suma)
        }, 300);
    })
    
}

console.log('Al inicio del programa');
let acumulado = 0
sumar(acumulado, 4)
    .then(function (suma) {
        return sumar(suma, 4)
    })
    .then(function (suma) {
        return sumar(suma, 4)
    })
    .then(function (suma) {
        return sumar(suma, 2)
    })
    .catch(function (err) {
        console.log(err.msg);
    })

console.log('Al final del programa');