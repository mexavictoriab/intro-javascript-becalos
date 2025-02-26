const EvaluadorNotas = (nota) => {
    nota = Number(nota)

    if(nota >= 90 ){
        return "Excelente"
    }else if (nota >= 75 && nota <= 89){
        return "Bien"
    }else if (nota >=60 && nota <= 74){
        return "Suficiente"
    }else {
        return "No aprueba"
    }
    
}

let nota = prompt( "ingresa tu nota en valor numérico")

let notaAlumno = EvaluadorNotas(nota);
console.log(notaAlumno);