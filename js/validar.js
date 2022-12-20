const btnEnv=document.querySelector('.btnEnv')
btnEnv.addEventListener('click',(e)=>{
    e.preventDefault()

    const miEmail=document.querySelector('.mi-email').value
    emailValido=validarEmail(miEmail)
    if(!emailValido){
        alert('Email incorrecto, teclee un email válido')
        miEmail.focus()
        return
    }

    const mitextarea=document.querySelector('.mi-textarea').value
    textarea=validartext(mitextarea)
    if(!textarea){
        alert('Debe de agregar un comentario con al menos 30 caracteres')
        mitextarea.focus()
        return
    }

    
})

function validarEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

function validartext(text){
    if(text.length>=30)
        return true
    else
        return false
}