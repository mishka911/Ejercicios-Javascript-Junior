/*class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = rdp;
    this.resolucionDeCamara = rdc;
    this.ram = ram
    this.encendido = false;
  }

  presionarBotonEncedido() {
    if (this.encendido == false) {
      alert("celular prendido");
      this.encendido = true;
    } else {
      alert("celular apagado");
      this.encendido = false;
    }
  }

  reiniciar() {
    if (this.encendido == true){
        alert("celular se esta reiniciando");
    } else{
        alert("celular apagado")
      }
  }

  tomarFoto(){
    alert(`foto tomada con una resolucion de: ${this.resolucionDeCamara}`)
  }

  grabarVideo(){
    alert(`grabando video con una resolucion de: ${this.resolucionDePantalla}`)
  }

  info(){
    return `
    Color: ${this.color} <br>
    Peso: ${this.peso} <br>
    Resolucion de pantalla: ${this.resolucionDePantalla} <br>
    Resolucion de Video:${this.resolucionDeCamara} <br>
    Memoria Ram: ${this.ram} <br>
    `
  }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc,ram)
        this.rdce = rdce
    }

    grabarVideoLento(){
        alert("grabas en camara lenta")
    }

    reconocimientoFacial(){
        alert("iniciando reconocimiento facial")
    }

    infoAltaGama(){
        return this.info() + `Resolucion de camara extra: ${this.rdce} <br>`
    }
}*/

/*celular1 = new Celular("rojo","150g", "5 pulgadas", "full hd", "1gb")
celular2 = new Celular("negro","155g", "5.4 pulgadas", "full hd 2k", "2gb")
celular3 = new Celular("blanco","146g", "6 pulgadas", "full hd 4k", "4gb")


celular1.info();
celular1.presionarBotonEncedido();
celular1.reiniciar();
celular1.tomarFoto();
celular1.grabarVideo();*/

/*celular1 = new CelularAltaGama('rojo', '130gb', '5.2', '4k', '3gb', 'full hd');
celular2 = new CelularAltaGama('negro', '142gb', '6', '2k', '4gb', 'hd');


document.write(`
${celular1.infoAltaGama()} <br>
${celular2.infoAltaGama()} <br>

`)*/

class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }

  abrir() {
    if (this.iniciada == false && this.instalada == true ) {
      alert("app encendida");
      this.iniciada = true;
    }
  }

  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      alert("app apagada");
      this.iniciada = false;
    }
  }

  instalar() {
    if (this.instalada == false) {
      alert("app instalada");
      this.instalada = true;
    }
  }

  desinstalar() {
    if (this.instalada == true) {
      alert("app desinstalada");
      this.instalada = false;
    }
  }

  appInfo(){
    return `
    Descargas: ${this.descargas} <br>
    Puntuacion: ${this.puntuacion} <br>
    Peso: ${this.peso} <br>
    `
  }
  
}

app = new App('10.000 descargas', '5 estrellas', '900mb')
app2 = new App('1.000 descargas', '4 estrellas', '700mb')
app3 = new App('12.000 descargas', '3 estrellas', '2gb')
app4 = new App('15.000 descargas', '5 estrellas', '300mb')
app5 = new App('16.000 descargas', '4.7 estrellas', '250mb')
app6 = new App('20.000 descargas', '3 estrellas', '4gb')
app7 = new App('30.000 descargas', '2 estrellas', '1gb')
/*app.instalar()
app.abrir()
app.cerrar()
app.desinstalar()*/

document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`)