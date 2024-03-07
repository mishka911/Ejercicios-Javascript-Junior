/*class Calculadora{

    sumar (num1, num2){
        return parseInt(num1)+parseInt(num2)
    }
    
    restar (num1, num2) {
        return parseInt(num1)-parseInt(num2)
    }
    
    multiplicar (num1, num2){
        return parseInt(num1)*parseInt(num2)
    }
    
    division (num1, num2) {
        return parseInt(num1)/parseInt(num2)
    }

    potenciar(num,exp){
        return num ** exp
    }

    raizCuadrada(num){
        return Math.sqrt(num)
    }

    raizCubica(num){
        return Math.cbrt(num)
    }

}
 const calculadora = new Calculadora();

alert("Elige que operacion deseas realizar")
let operacion = prompt("1 suma, 2 resta, 3 multiplicar, 4 division, 5 potencia, 6 raiz cuadrada, 7 raiz cubica")

if(operacion == 1){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = calculadora.sumar(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)

}

else if(operacion == 2){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = calculadora.restar(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)
}

else if(operacion == 3){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = calculadora.multiplicar(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)
}

else if(operacion == 4){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = calculadora.division(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)
}

else if(operacion == 5){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el exponente") 
    resultado = calculadora.potenciar(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)
}

else if(operacion == 6){
    let numero1 = prompt("ingrese el numero")
    resultado = calculadora.raizCuadrada(numero1)
    document.write(`tu resultado es ${resultado}`)
}

else if(operacion == 7){
    let numero1 = prompt("ingrese el numero")
    resultado = calculadora.raizCubica(numero1)
    document.write(`tu resultado es ${resultado}`)
}
 else{
    alert("no se encontro la operacion")
 } */

/*const obtenerInformacion = (materia) => {
  materias = {
    fisica: ['Perez',"pedro", "pepito", "cofla", "maria"],
    programacion: ['Rodriguez',"pedro", "juan", "pepito"],
    logica: ['Proaño',"pedro", "pepito", "juan", "cofla", "maria"],
    quimica: ['Lopez',"pedro", "pepito", "juan", "cofla", "maria"],
  };

  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
if (informacion !== false) {
    let profesor = informacion[0][0]
    let alumnos = informacion[0]
    alumnos.shift()
  document.write(`<b>El profesor <span style="color: blue">${profesor}</span> es de la materia:</b> ${informacion[1]}<br>
  <b>Los alumnos de esa materia son: </b> ${alumnos} <br><br> `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresente = []
    let cantidadTotal = 0
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++
            clasesPresente.push(' ' + info)
        }
    }

    return `El alumno <spam style= color:red>${alumno}</spam> esta en <b>${cantidadTotal}</b> clases que son:
 <spam style= color:green>${clasesPresente}</spam>
     ` 
}

mostrarInformacion('fisica')
mostrarInformacion('programacion')
mostrarInformacion('logica')
mostrarInformacion('quimica')
document.write(cantidadDeClases('cofla'))*/

let materias = {
  fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
  programacion: ["Rodriguez", "pedro", "juan", "pepito"],
  logica: ["Proaño", "pedro", "pepito", "juan", "cofla", "maria"],
  quimica: ["Lopez", "pedro", "pepito", "juan", "cofla", "maria"],
};

const inscribir = (alumno, materia) => {
  personas = materias[materia];
  if (personas.length >= 21) {
    document.write(`Estimado <b>${alumno}</b> ya no se puede inscribir en la materia de <b>${materia}</b> <br>`);
} else {
    personas.push(alumno);
    if (materia == "fisica") {
      materias = {
        fisica: personas,
        programacion: materias["programacion"],
        logica: materias["logica"],
        quimica: materias["quimica"],
      };
    } else if (materia == "programacion") {
      materias = {
        fisica: materias["fisica"],
        programacion: personas,
        logica: materias["logica"],
        quimica: materias["quimica"],
      };
    } else if (materia == "logica") {
      materias = {
        fisica: materias["fisica"],
        programacion: materias["programacion"],
        logica: personas,
        quimica: materias["quimica"],
      };
    } else if (materia == "quimica") {
      materias = {
        fisica: materias["fisica"],
        programacion: materias["programacion"],
        logica: materias["logica"],
        quimica: personas,
      };
    }

    document.write(`Estimado ${alumno}, te has inscrito en la materia de ${materia} <br>`)
  }
};

document.write(materias['fisica'] + '<br> <br>')

inscribir("pepe", "fisica");
inscribir("lucy", "fisica");
inscribir("sara", "fisica");
inscribir("dexter", "fisica");
inscribir("pepe", "fisica");
inscribir("lucy", "fisica");
inscribir("sara", "fisica");
inscribir("dexter", "fisica");
inscribir("pepe", "fisica");
inscribir("lucy", "fisica");
inscribir("sara", "fisica");
inscribir("dexter", "fisica");
inscribir("pepe", "fisica");
inscribir("lucy", "fisica");
inscribir("sara", "fisica");
inscribir("dexter", "fisica");
inscribir("pepe", "fisica");
inscribir("lucy", "fisica");
inscribir("sara", "fisica");
inscribir("dexter", "fisica");
inscribir("pepe", "fisica");
inscribir("lucy", "fisica");
inscribir("sara", "fisica");
inscribir("dexter", "fisica");
