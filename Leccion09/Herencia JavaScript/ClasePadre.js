
class Persona {

    static contadorObjetosPersona = 0;//Atributos de nuestra clase

    email = "Valor default email";//Atributos de nuestros objetos

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
        return this._apellido ;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    static saludar(){
        console.log("Saludos desde metodo static")
    }

    static saludar2(persona){
        console.log(persona.nombre)
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super (nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return this.nombre+ " "+ this._apellido+"," + this._departamento;
    }

    toString(){
        return this.nombreCompleto();
    }
}

let persona1 = new Persona("Juan","Perez");
console.log(persona1);
console.log(persona1.nombre);

let empleado1 = new Empleado("Maria","Jimenez","Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());


//persona1.saludar(); No es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);