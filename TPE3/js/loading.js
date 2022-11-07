document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"
    
    let header = document.querySelector(".header");
    header.classList.add("ocultarHeader");
    let body = document.body;
    let contenedorLoader = document.querySelector(".contenedorLoader");
    
    setTimeout(function(){
        contenedorLoader.classList.add("ocultarContenedorLoader");
        
    }, 5000);

    setTimeout(function(){
        header.classList.remove("ocultarHeader");
        body.classList.remove("hidden");
    }, 5000);
    
    
}





