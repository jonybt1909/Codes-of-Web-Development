let sumar = function(a=6,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b+arguments[2];
};

resultado = sumar(5,3,7);
console.log(resultado)