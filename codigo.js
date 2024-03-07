dineroCofla = prompt("ingresa Cofla monto");
dineroRoberto = prompt("ingresa Roberto monto");
dineroPedro = prompt("ingresa Pedro monto");

dineroCofla = parseFloat(dineroCofla).toFixed(2);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert("helado de agua");
  let cambio = parseFloat(dineroCofla) - 0.6;
  cambio = parseFloat(cambio.toFixed(2));
  alert("y te sobran " + cambio);

} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("helado de crema");
  let cambio = parseFloat(dineroCofla) - 1;
  cambio = parseFloat(cambio.toFixed(2));
  alert("y te sobran " + cambio);

} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert("helado de crema");
  let cambio = parseFloat(dineroCofla) - 1.6;
  cambio = parseFloat(cambio.toFixed(2));
  alert("y te sobran " + cambio);

} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert("helado de crema");
  let cambio = parseFloat(dineroCofla) - 1.7;
  cambio = parseFloat(cambio.toFixed(2));
  alert("y te sobran " + cambio);

} else if (dineroCofla >= 1.8 && dineroCofla < 1.9) {
  alert("helado de crema");
  let cambio = parseFloat(dineroCofla) - 1.8;
  cambio = parseFloat(cambio.toFixed(2));
  alert("y te sobran " + cambio);
}

else if (dineroCofla>= 2.9){
    alert("dos helados");
    let cambio = parseFloat(dineroCofla) - 2.9;
  cambio = parseFloat(cambio.toFixed(2));
  alert("y te sobran " + cambio);
}

else{
    alert("nada");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("helado de agua");
  } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("helado de crema");
  
  } else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("helado de crema");
  
  } else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("helado de crema");
  
  } else if (dineroPedro >= 1.8 && dineroPedro < 1.9) {
    alert("helado de crema");
  }
  
  else if (dineroPedro>= 2.9){
      alert("dos helados");
  }
  
  else{
      alert("nada");
  }

  if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("helado de agua");
  } else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("helado de crema");
  
  } else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("helado de crema");
  
  } else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("helado de crema");
  
  } else if (dineroRoberto >= 1.8 && dineroRoberto < 1.9) {
    alert("helado de crema");
  }
  
  else if (dineroRoberto>= 2.9){
      alert("dos helados");
  }
  
  else{
      alert("nada");
  }