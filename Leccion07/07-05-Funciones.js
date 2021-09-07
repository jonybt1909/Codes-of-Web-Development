//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
    return;
}


//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);


const persona ={
    nombre:"Juan",
    apellido:"Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara"
} 
//Paso por referencia
cambiarValorObjeto(persona);

console.log(persona)