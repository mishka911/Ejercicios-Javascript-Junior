/*let free = false;

const validarCliente = (time) => {
  let edad = prompt("que edad tienes?");

  if (edad > 18) {
    if (time => 2 && time <= 7 && free == false) {
      alert("puedes entrar gratis ya que llegaste despues de las 2 am");
      free = true
    } else {
      alert(`son las ${time}:00hs debes pagar la entrada`);
    }
  } else {
    prompt("eres menor no puedes entrar");
  }
};

validarCliente(0.2)*/
/* tomar asistencia 
let cantidad = prompt("cuantos alumnos son?")
let alumnosTotales = []

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt(`Nombre del alumno  `+ (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre)
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){ // se usa in para tener valores
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
} 

for(alumno in alumnosTotales){
 
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ______________ Presentes: ${alumnosTotales[alumno][1]} <br>
    ______________ Ausentes: ${30 - alumnosTotales[alumno][1]} <br>
    `;

    if (30 - alumnosTotales[alumno][1] > 18) { //es para sacar el porcentaje de faltas en un semestre
        resultado+= "<b style='color:red'> Reprobado el semestre</b> <br> <br>"
    } else {
        resultado+= "<br><br>"
    }

    document.write(resultado)
}*/

const sumar = (num1, num2) =>{
    return parseInt(num1)+parseInt(num2)
}

const resta = (num1, num2) =>{
    return parseInt(num1)-parseInt(num2)
}

const multiplicar = (num1, num2) =>{
    return parseInt(num1)*parseInt(num2)
}

const division = (num1, num2) =>{
    return parseInt(num1)/parseInt(num2)
}

alert("que operacion deseas realizar?")
let operacion = prompt("1 suma, 2 resta, 3 multiplicar, 4 division")

if(operacion == 1){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = sumar(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)

}

else if(operacion == 2){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = resta(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)
}

else if(operacion == 3){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = multiplicar(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)
}

else if(operacion == 4){
    let numero1 = prompt("ingrese el primer numero")
    let numero2 = prompt ("ingrese el segundo numero") 
    resultado = division(numero1,numero2)
    document.write(`tu resultado es ${resultado}`)
}
 else{
    alert("no se encontro la operacion")
 }