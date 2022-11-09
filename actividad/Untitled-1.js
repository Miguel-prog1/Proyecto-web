campoDeContra = document.getElementById("contraseña")
confirmacion = document.getElementById("confirmar")
textError=document.getElementById("textoError")
campoDeContra.addEventListener("input",coincidencia)
confirmacion.addEventListener("input", coincidencia)
coincidencia();

function invisible(){
    textError.style.visibility = "hidden";
}

function visible(){
    textError.style.visibility = "visible";
}
function coincidencia(){
    const contra = campoDeContra.value
    const contraConfirmacion = confirmacion.value
    if(contra == contraConfirmacion){
        confirmacion.className="verde";
        campoDeContra.className="verde";
        invisible();
    } else {
        confirmacion.className="rojo";
        campoDeContra.className="rojo"; 
        visible();
    }
}