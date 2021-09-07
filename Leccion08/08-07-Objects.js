let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto : function(titulo,tel){
        return titulo + ":" + this.nombre + " " + this.apellido + "," + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
    
}

//Uso de apply para usar 
//el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto("Lic","55443322"));

let arreglo = ["Ing","66443355"]
console.log(persona1.nombreCompleto.apply(persona2,arreglo));