class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre},sueldo ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente:dpto: ${this._departamento}`
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Empleado){
        console.log("es un objeto de tipo empleado")
    }
    else if(tipo instanceof Gerente){
        console.log("es un objeto de tipo gerente")
    }
}

let empleado1 = new Empleado("Juan",300)
let gerente1 = new Gerente("Carlos",500,"Sistemas");
console.log(gerente1.obtenerDetalles());

imprimir(empleado1);