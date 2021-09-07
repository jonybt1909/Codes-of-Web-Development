//Funcion constructir de objetos de tipo persona
//Crear objetos con misma caracteristicas, propiedades
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;    
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = "44332211";

let padre = new Persona("Juan","Perez","jperez@mail.com");
padre.tel = "99553322"
console.log(padre.tel);

let madre = new Persona("Laura","Quintero","lquintero@mail.com");
console.log(madre.tel);