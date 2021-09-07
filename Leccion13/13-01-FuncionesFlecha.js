let miFuncion = function(){
    console.log("Saludos desde mi funcion");
}

// let miFuncionFlecha = () => {
//     console.log("Saludos desde mi funcion flecha");
// }

// let miFuncionFlecha = () => console.log("saludos desde mi funcion flecha");

let miFuncionFlecha = () => {
    return "Saludos desde mi funcion flecha" ;
} 

const saludar = () => "Saludos desde la funcion flecha";

const regresaObjeto = () => ({nombre : "Juan", apellido: "Lara"});

console.log(miFuncion());
console.log(miFuncionFlecha());
console.log(saludar());
console.log(regresaObjeto());