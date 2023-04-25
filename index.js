//funcion declarativa 
function sumaDeclarada(a,b){
    return a + b
}

//funcion expresada
const sumaExpresada = function(a,b){
    return a + b
}

//funcion flecha
const sumaFlecha = (a,b)=> {
    return a+b
}

//funcion flecha con return implicito
const sumaRI = (a,b) => a+b;

//funcion constructora
function Person(nombre,edad){
    this.nombre = nombre;
    this.edad = edad
}




const pesona1 = new Person("carlos", 19)
const pesona2 = new Person("nico", 22)

console.log(sumaDeclarada(1,2));
console.log(sumaExpresada(1,3));
console.log(sumaFlecha(1,4));
console.log(sumaRI(1,5));
console.log(pesona1);
console.log(pesona2);