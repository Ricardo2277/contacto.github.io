const correo = document.querySelector('#correo');
const comentario = document.querySelector('#comentario');


const btnEnviar = document.querySelector('.btnEnv');

cargarEventos();

function cargarEventos(){
    btnEnviar.addEventListener('click', (e)=>{
        e.preventDefault()


    const correo=document.querySelector('.mi-email').value
    correoValido=validarCorreo(correo)
    if(correoValido){
        alert('Debes de escribir un correo electrónico')
        correo.focus()
        return
    }

    const comentario=document.querySelector('.mi-textarea').value
    comentarioValida=validarComentario(comentario)
    if(comentarioValida){
        alert('Debes de escribir un comentario')
        comentario.focus()
        return
    }
    alert('Todo bien')
    enviarDatos();
})

    function validarCorreo(correo){
        if(correo==='')
            return true
        else
            return false
    }

    function validarComentario(comentario){
        if(comentario==='')
            return true
        else
            return false
    }
}
            

function enviarDatos(){

    url = `http://localhost:4000/api/contacto`;

    fetch(url,{
                method: 'POST',

                headers: { "Content-Type": "application/json", },

                body: JSON.stringify({
                    correo:correo.value,
                    comentario:comentario.value
                })

        })
        .then( respuesta => {
            console.log('Hubo respuesta')
            return respuesta.json();
        } )
        .then( resultado => {
            console.log(resultado)
            alert(resultado.mensaje);
        })
}