var boton = document.getElementById('botonIngresar')
var error = document.getElementById('error')
var crearUsuarioBtn = document.getElementById('crear-usuario')

boton.addEventListener('click', function (event) {
        usuario = document.getElementById("usuario").value;
        contraseña = document.getElementById("contraseña").value
    
    
        if(validacionUsuario(usuario) && validacionContraseña(contraseña)){
            
            location.href="../principal/pagina_principal.html"
            
            /*window.location.href = 'principal.html';*/
        }
        else{
            document.getElementById("error").style.display = "block"
            error.innerHTML = "Los datos ingresados no son correctos"
        }
    }
  )

function validacionUsuario(usuario){
    return /^\d{8}$/.test(usuario)
}

function validacionContraseña(contraseña){

    tieneLetra = false
    tieneNumero = false
    caracterIncorrecto = false

    if(contraseña.length >= 6){
        for(var i = 0; i < contraseña.length; i++){

            valorCaracter = contraseña.charCodeAt(i)
            
            if((valorCaracter >= 65 && valorCaracter <= 90) || (valorCaracter >= 97 && valorCaracter <= 122)){
                
                tieneLetra = true;   
            }

            else if(contraseña.charCodeAt(i) >= 48 && contraseña.charCodeAt(i) <= 57)

			{
				tieneNumero = true;
            }
            else{

                caracterIncorrecto = true;
            }
        }
    }

    return !caracterIncorrecto && tieneLetra && tieneNumero

}

crearUsuarioBtn.addEventListener('click', ()=> {
    document.location.href = "../usuarios/cm_usuario.html"
})