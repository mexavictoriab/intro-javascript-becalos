const EvaluadorNotas = () => {
    
    let nota = prompt( "ingresa tu nota en valor numérico")
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

let notaAlumno = EvaluadorNotas()
console.log(notaAlumno);