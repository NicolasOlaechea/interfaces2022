"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){

    let menuHamburguesa = document.querySelector("#menuHamburguesa");
    menuHamburguesa.addEventListener("click", mostrarMenuDesplegable);
    let cruz = document.querySelector("#cruz");
    cruz.addEventListener("click", ocultarMenuDesplegable);
    let fondoOscuro = document.querySelector("#fondoOscuro");
    let item1 = document.getElementById("itemMenu1");
    let item2 = document.getElementById("itemMenu2");
    let item3 = document.getElementById("itemMenu3");
    let item4 = document.getElementById("itemMenu4");
    let item5 = document.getElementById("itemMenu5");
    let item6 = document.getElementById("itemMenu6");
    let item7 = document.getElementById("itemMenu7");
        
    function mostrarMenuDesplegable(){
        item1.classList.add("ocultarItemMenu");
        item2.classList.add("ocultarItemMenu");
        item3.classList.add("ocultarItemMenu");
        item4.classList.add("ocultarItemMenu");
        item5.classList.add("ocultarItemMenu");
        item6.classList.add("ocultarItemMenu");
        item7.classList.add("ocultarItemMenu");
        let menuDesplegable = document.querySelector("#menuDesplegable"); 
        menuDesplegable.classList.remove("menuDesplegable");
        menuDesplegable.classList.add("mostrarMenuDesplegable");
        menuHamburguesa.classList.add("ocultarLogoMenuHamburguesa"); 
        fondoOscuro.classList.toggle("fondoOscuro");
        fondoOscuro.classList.toggle("fondoOscuroHide");
        mostrarItems();
    }

    function ocultarMenuDesplegable(){
        let menuDesplegable = document.querySelector("#menuDesplegable");  
        menuDesplegable.classList.remove("mostrarMenuDesplegable");
        menuDesplegable.classList.add("menuDesplegable");
        menuHamburguesa.classList.remove("ocultarLogoMenuHamburguesa");
        fondoOscuro.classList.toggle("fondoOscuro");
        fondoOscuro.classList.toggle("fondoOscuroHide");
        item1.classList.remove("mostrarItemMenuDesplegable");
        item2.classList.remove("mostrarItemMenuDesplegable");
        item3.classList.remove("mostrarItemMenuDesplegable");
        item4.classList.remove("mostrarItemMenuDesplegable");
        item5.classList.remove("mostrarItemMenuDesplegable");
        item6.classList.remove("mostrarItemMenuDesplegable");
        item7.classList.remove("mostrarItemMenuDesplegable");
    }

    function mostrarItems(){
        setTimeout(function(){
            item1.classList.add("mostrarItemMenuDesplegable");
        }, 200);
        setTimeout(function(){
            item2.classList.add("mostrarItemMenuDesplegable");
        }, 400);
        setTimeout(function(){
            item3.classList.add("mostrarItemMenuDesplegable");
        }, 600);
        setTimeout(function(){
            item4.classList.add("mostrarItemMenuDesplegable");
        }, 800);
        setTimeout(function(){
            item5.classList.add("mostrarItemMenuDesplegable");
        }, 1000);
        setTimeout(function(){
            item6.classList.add("mostrarItemMenuDesplegable");
        }, 1200);
        setTimeout(function(){
            item7.classList.add("mostrarItemMenuDesplegable");
        }, 1400);
    }
}


