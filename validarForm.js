window.onload=function(){
  let formulario = document.forms[0];
  //agregar manejador de evento para el formulario
  if(document.addEventListener){
    formulario.addEventListener("submit", validarFormulario);
  }
  else if(document.attachEvent){
    formulario.attachEvent("onsubmit", validarFormulario);
  }
}
function validarFormulario(event){
  event.preventDefault();
  //acceder al codigo de cliente
  let codigo_cliente = document.getElementById('codigo_cliente');
  if(!codigoCliente(codigo_cliente.value)){
    alert("El código inválido\n Por favor ponga los datos como se piden");
    return false; //Código del cliente no válida
  }

  //acceder a input email
  let inputEmail = document.getElementById('email');
  if(!validarEmail(inputEmail.value)){
    alert("Email no válido\n Por favor ponga los datos como se piden");
    return false; //dirección de correo no válida
  }

  //acceder a número de factura
  let numFactura = document.getElementById('numFactura');
  if(!factura(numFactura.value)){
    alert("Factura no válido \n Por favor ponga los datos como se piden");
    return false; //Número de factura no válida
  }

  //validar monto a pagar, solo aceptar valores en coma flotate,
  //por ejemplo: 133.30 o 1020.15
  //acceder a monto a pagar
  let monto_pago = document.getElementById('monto_pago');
   if(!validarMontoPagar(monto_pago.value)){
    alert("Monto a pagar no válido\n Por Favor ponga los datos como se piden");
    return false; //Número de factura no válida
  }

  let numero_tarjeta = document.getElementById('numero_tarjeta');
    if(!validarTarjeta(numero_tarjeta.value)){
    alert("Número de tarjeta no válido\n Por favor ponga los datos como se piden");
    return false; 
  }

  var tarjetaHabiente = document.getElementById("Tarjetahabiente");
  if(tarjetaHabiente.value === ''){
    alert("Necesita el nombre del titular de la tarejta\n Favor ponga los datos como se piden");
    return false; //Número de tarjeta
  }

  let fechaexp = document.getElementById('fechaexp');
  if(!fechaExp(fechaexp.value)){
    alert("Fecha de expiración de tarjeta no valido\n Favor ponga los datos como se piden");
    return false; 
  }

  alert("Su pago ha sido exitoso");
  return true;
  }
    function getTarget(e){
      var target;
      if(e.target)
        target = e.target;
      else if(e.srcElement)
        target = e.srcElement;
      if(target.nodeType==3) //safari
        target = target.parentNode;

      return target;
    }
    //Email
    function validarEmail(email){
    //expresión regular para validar correo
      var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
      return re.test(email);
    }
    //Codigo cliente
    function codigoCliente(codigo){
      var re = /[0-9]{3}-[0-9]{3}/;
      return re.test(codigo);
    }

    // Facturar
    function factura(factura){
      var re = /[0-9]-[0-9]{3}/;
      return re.test(factura);
    }
    //Validación de MontoPagar
    function validarMontoPagar(monto){
      return !!(monto % 1);
    }
    //Validación de Tarjeta
    function validarTarjeta(tarjeta){
      var re = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
      return re.test(tarjeta);
    }
    //Fechavencimiento
    function fechaExp(fecha){
      var re = /[0-9]{2}-[0-9]{2}/;
      return re.test(fecha) 
  // return true;
}