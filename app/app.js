var message = "Hello World";
console.log(message);

const formRegistro = document.getElementById("submit")
formRegistro.addEventListener("submit", enviarDato)

async function iniciarSesion(e){ 
    e.preventDefault();
    const usuarioInicioSesion = document.getElementById("usuarioInicioSesion").value;
    const contraseñaInicioSesion = document.getElementById("contraseñaInicioSesion").value;
    let nombreCorrecto = Boolean;
    nombreCorrecto = false;
    let sesionIniciada = Boolean;
    sesionIniciada = false;
    let res = await fetch(urlUsuarios)
    let json = await res.json()
    let cantDinero = 0
    try{
        for (let i = 0; i < json.length; i++) {
            const nombreUsuario = json[i].usuario
            const contraseña = json[i].password
            const idUsuario = json[i].id
            const dineroUsuario = json[i].dinero
            if (usuarioInicioSesion == nombreUsuario) {
                i = json.length
                nombreCorrecto = true;
                if (contraseñaInicioSesion == contraseña) {
                    if (idUsuario == 1) {
                        alert("Sesion Iniciada como Administador!")
                        sesionIniciada = true
                        cantDinero = dineroUsuario
                        mostrarIconoAñadir();
                    }
                    else {
                    alert("Sesion Iniciada")
                    sesionIniciada = true
                    }
                }
                else{
                    alert("Contraseña Incorrecta")
                }
            }
        }
        if (nombreCorrecto == false) {
            alert("Nombre incorrecto")
        }
        if (sesionIniciada == true){
            cerrarFormulario();
            document.querySelector(".inicioSesion").innerHTML = `<p>Hola <b>${usuarioInicioSesion}</b></p>`
        }
    }
    catch(error){
        console.log(error)
    }
}
