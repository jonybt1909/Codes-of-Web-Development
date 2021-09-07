"use strict"
try{
    x = 10;
    throw "Mi error";
}
catch(error){
    console.log(error);
}
finally{
    console.log("Termina la revision de errores");
}
console.log("continuamos...");

//-----------------------------------
let resultado = "hola";

try{
    if( isNaN (resultado)) throw "No es un numero";
    else if( resultado == "") throw "Cadena vacia"
    else if( resultado >= 0) throw "Valor positivo"
    else if( resultado < 0) throw "Valor negativo"
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}