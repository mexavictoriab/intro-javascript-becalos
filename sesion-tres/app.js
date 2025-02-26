let frutas = [
    "Manzana",
    "Platano",
    "Guayaba",
    "Mango",
    "Platano",
    "Guayaba",
    "Mango",
    "Platano",
    "Guayaba",
    "Mango",
    "Mango",
    "Mango"
]

let frutaManzana = [

]

let frutaPlatano = [

]

let frutaGuayaba = [

]

let frutaMango = [

]

const cantidadFrutas = (array) => {
    for(let i = 0;i < array.length ;i++){
        if(array[i]==="Manzana"){
            frutaManzana.push(array[i])
        }else if(array[i]==="Platano"){
            frutaPlatano.push(array[i])
        }else if(array[i]==="Guayaba"){
            frutaGuayaba.push(array[i])
        }else{
            frutaMango.push(array[i])
        }
        return{
            Manzana: frutaManzana.length,
            Platano: frutaPlatano.length,
            Guayaba: frutaGuayaba.length,
            Mango: frutaMango.length
        }
            
        
    }
}

console.log(cantidadFrutas(frutas));