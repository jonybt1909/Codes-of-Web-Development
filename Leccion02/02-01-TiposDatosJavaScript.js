//Tipo de dato String
var  nombre = "Jonatan";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero)

dato = 5;
console.log(typeof dato)

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}

console.log(objeto)


//Tipo de dato Boolean(true,false)
var bandera = false;
console.log(typeof bandera)


//Tipo de dato function
function mifuncion(){}

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una funcion
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona)

//Tipo undefined
var x;
console.log(x);
x = undefined;

//null ausencia de valor
var y = null;
console.log(y);

//-------------------------------

//Tipo de dato Array y Empty String

var autos = ["BMW","Audi","Volvo"];
console.log(autos)
console.log(typeof autos)

var z = ""
console.log(z);
console.log(typeof z);
