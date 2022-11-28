"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    //let caracteristica = document.querySelector(".caracteristica");
    let caracteristicas = document.getElementsByClassName("caracteristica");
    function mostrarCaracteristicasScroll(){
        for(let i=0; i<caracteristicas.length; i++){
            let alturaVentana = window.innerHeight;
            let scrollTop = document.documentElement.scrollTop;
            let posicionCaracteristica = caracteristicas[i].offsetTop;
            let alturaCaracteristica = caracteristicas[i].clientHeight;
            if(posicionCaracteristica-alturaVentana/2 > scrollTop){
                caracteristicas[i].classList.add("ocultarCaracteristicas");
                caracteristicas[i].classList.remove("mostrarCaracteristicas");
            }
            if(posicionCaracteristica-alturaVentana/2 < scrollTop){
                caracteristicas[i].classList.add("mostrarCaracteristicas");
                caracteristicas[i].classList.remove("ocultarCaracteristicas");
            }
            if((posicionCaracteristica+alturaCaracteristica)-alturaVentana+alturaVentana/2 < scrollTop){
                caracteristicas[i].classList.add("ocultarCaracteristicas");
                caracteristicas[i].classList.remove("mostrarCaracteristicas");
            }
        }
    }

    let header = document.getElementById("header");
    let logoPagina = document.getElementById("logoPagina");
    let logoMenuHamburguesa = document.getElementById("menuHamburguesa");
    let yaLoAchico = false;
    function achicarHeader(){
        //let alturaVentana = window.innerHeight;
        let scrollTop = document.documentElement.scrollTop;
        //let posicionHeader = header.offsetTop;
        let alturaHeader = header.clientHeight;
        if(scrollTop>alturaHeader){
            logoPagina.classList.add("achicarLogo");
            logoMenuHamburguesa.classList.add("achicarLogo");
            header.classList.add("achicarHeader");
            logoPagina.classList.remove("agrandarLogo");
            logoMenuHamburguesa.classList.remove("agrandarLogo");
            header.classList.remove("agrandarHeader");
            yaLoAchico = true;
        }
        if(yaLoAchico == true){
            if(scrollTop<alturaHeader){
                logoPagina.classList.add("agrandarLogo");
                logoMenuHamburguesa.classList.add("agrandarLogo");
                header.classList.add("agrandarHeader");
                logoPagina.classList.remove("achicarLogo");
                logoMenuHamburguesa.classList.remove("achicarLogo");
                header.classList.remove("achicarHeader");
            }
        }
    }
    window.addEventListener("scroll", function(){
        mostrarCaracteristicasScroll();
        achicarHeader();
    });
}