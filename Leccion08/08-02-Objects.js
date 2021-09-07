
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona["apellido"]);

//for in

for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

persona.tel = "22334455";

console.log(persona.tel);

delete persona.tel;

console.log(persona);

//Concatenar cada valor de propiedad
console.log(persona.nombre + "," + "persona.apellido");

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}


let personaArray = Object.values(persona);
console.log(personaArray);


let personaString = JSON.stringify(persona);
console.log(personaString);

