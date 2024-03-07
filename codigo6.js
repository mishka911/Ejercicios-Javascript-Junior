const contenedor = document.querySelector(".flex-container")

const boton = document.querySelector('.send-button')
boton.value = boton.value.toUpperCase()

function crearLlave(nombre, modelo, precio){
    img = "<img class = 'llave-img' src='llave.png'>"
nombre = `<h2>Nombre: ${nombre}</h2>`
modelo = `<h2>Modelo: ${modelo}</h2>`
precio = `<h2>Precio: $${precio}</h2>`

return [img,nombre, modelo, precio]

}

let documentFragment = document.createDocumentFragment()

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*1000)
    let precioRadom = Math.round(Math.random()*10+30)
    let llave = crearLlave(`Llave ${i}` , `modelo ${modeloRandom}` , precioRadom)
    let div = document.createElement('DIV')
    div.addEventListener('click', ()=> {
            document.querySelector('.key-data').value = modeloRandom

    })
    div.tabIndex = i
    div.classList.add(`item-${i}`, 'flex-item')
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]
    documentFragment.appendChild(div)
    
}

contenedor.appendChild(documentFragment)