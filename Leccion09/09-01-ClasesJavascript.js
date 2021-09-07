class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        this._apellido = apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona("Juan","Perez");
persona1.nombre = "Juan Carlos"//manda a llamar set nombre
console.log(persona1.nombre);//manda a llamar get nombre