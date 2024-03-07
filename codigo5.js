/*let materias = {
    fisica: [90,6,3, 'fisica'],
    quimica:[84,8,2, 'quimica'],
    algebra:[92,8,4, 'algebra'],
    programacion:[96,8,4, 'programacion'],
    ingles:[91,6,3, 'ingles'],
    biologia:[79,7,4, 'biologia'],
    historia:[76,9,2, 'historia'],
    filosofia:[98,8,1, 'filosofia'],
    psicologia:[100,10,4, 'psicologia']
}

const aprobo =() =>{
    for (materia in materias){

        let asistencias = materias[materia][0]
        let promedio = materias[materia][1]
        let trabajos = materias[materia][2]

        console.log(materias[materia][3])
        if (asistencias >= 90){
            console.log('%cAprobado asistencias', 'color: green; font-weight: bold');

        } else{
            console.log('%cDesaprobado por inasistencias', 'color: red; font-weight: bold')
        }

        if(promedio >= 7){
            console.log('%cAprobado por promedio', 'color: green; font-weight: bold');
        } else{
            console.log('%cDesaprobado por promedio', 'color: red; font-weight: bold');
        }

        if(trabajos >=3){
            console.log('%cAprobado por trabajos', 'color: green; font-weight: bold');
        } else{
            console.log('%cDesaprobado falta de entregar trabajos', 'color: red; font-weight: bold');
        }
    }
}

aprobo()*/

/*
let tp = '100 minutos para trabajos practicos'
let estudio = '100 minutos de estudio'
let trabajo = '240 minutos de trabajo'
let homework = '30 minutos de tareas de la casa'
let descanso = '10 minutos de descanso'

for (var i = 0; i < 14; i++) {

    if (i == 0 ){
        console.group('semana 1')
    }
console.log('Tareas')
console.groupCollapsed('Dia ' + (i+1))
console.log(trabajo)
console.log(descanso)
console.log(estudio)
console.log(tp)
console.log(homework) 
console.groupEnd() 

if(i==7){
        console.groupEnd()
        console.groupCollapsed('semana 2')
    
}

}

console.groupEnd()
console.groupEnd()*/