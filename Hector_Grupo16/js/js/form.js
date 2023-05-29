
//  Accion Borrar//
function borrar() {
    nombre.value = "";
    apellido.value = "";
    email.value = ""; 
    password.value = "";
  
}
btnBorrar.addEventListener("click", borrar);

function validarFormulario() {
  let nombre = document.getElementById('nombre').value.trim(); 
  let apellido = document.getElementById('apellido').value.trim(); 
  const email = document.getElementById('correo').value; 
  let password= document.getElementById ('contraseña').value; 

  if ((nombre.length == 0)||(nombre.length== null || apellido.length == 0||apellido.length == null||email.length == 0||email.length == null|| password.lenghth == 0)){
    alert ('Por favor complete todos los campos');
    //document.getElementById('nombre').focus();
    return;}

  for (var i=0; i <nombre.length;i++){
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode === 32))){
      alert ("El campo 'Nombre' solo puede contener caracteres alfanumericos");
      return false;}
    }
  
  //valido apellido
  
  for (var m=0; m <apellido.length;m++){
    var charCode = apellido.charCodeAt(m);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode === 32))){
       alert ("El campo 'Apellido' solo puede contener caracteres alfabeticos");
       return false;}
      }
        
    
  //valido mail  
  var emailField = document.getElementById('correo');
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		//alert('Email is valid, continue with form submission');
		//return false;
	}else{
		alert('Por favor introduzca un mail válido');
		return false;
	}
 
  alert("Formulario enviado correctamente ");
  return true;
}
//btnSubmit.addEventListener("click", validarFormulario);                
                          