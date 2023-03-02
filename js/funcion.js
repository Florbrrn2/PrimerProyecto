
let botoncontacto =document.getElementById ('botoncontacto');

let contenidoCont = document.getElementById ('contenidoCont');

botoncontacto.addEventListener ('click', toggleText);

function toggleText () {
    contenidoCont.classList.toggle ('informacion');
}



