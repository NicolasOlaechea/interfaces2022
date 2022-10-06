document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"

    let menuHamburguesa = document.querySelector("#menuHamburguesa");
    menuHamburguesa.addEventListener("click", mostrarMenuDesplegable);
    let cruz = document.querySelector("#cruz");
    cruz.addEventListener("click", ocultarMenuDesplegable);

    function mostrarMenuDesplegable(){
        "use strict"
        let body = document.body;
        body.classList.add("oscurecerFondo");
        let menuDesplegable = document.querySelector("#menuDesplegable");    
            menuDesplegable.classList.remove("menuDesplegable");
            menuDesplegable.classList.add("mostrarMenuDesplegable");
            menuHamburguesa.classList.add("ocultarLogoMenuHamburguesa");
            
    }

    function ocultarMenuDesplegable(){
        "use strict"
        let body = document.body;
        body.classList.remove("oscurecerFondo");
        let menuDesplegable = document.querySelector("#menuDesplegable");  
        menuDesplegable.classList.remove("mostrarMenuDesplegable");
        menuDesplegable.classList.add("menuDesplegable");
        menuHamburguesa.classList.remove("ocultarLogoMenuHamburguesa");
    }

}