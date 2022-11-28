"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    let header = document.getElementById("header");
    let logoPagina = document.getElementById("logoPagina");
    let logoMenuHamburguesa = document.getElementById("menuHamburguesa");
    let cruz = document.getElementById("cruz");
    let yaLoAchico = false;
    function achicarHeader(){
        //let alturaVentana = window.innerHeight;
        let scrollTop = document.documentElement.scrollTop;
        //let posicionHeader = header.offsetTop;
        let alturaHeader = header.clientHeight;
        if(scrollTop>alturaHeader){
            logoPagina.classList.add("achicarLogo");
            logoMenuHamburguesa.classList.add("achicarLogo");
            header.classList.add("achicarHeader"); //clase con una animacion
            cruz.classList.add("cruzChica");
            cruz.classList.remove("cruzGrande");
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
                cruz.classList.add("cruzGrande");
                cruz.classList.remove("cruzChica");
                logoPagina.classList.remove("achicarLogo");
                logoMenuHamburguesa.classList.remove("achicarLogo");
                header.classList.remove("achicarHeader");
            }
        }
    }
    window.addEventListener("scroll", function(){
        achicarHeader();
    });
}