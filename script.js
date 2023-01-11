function encriptar(){
    var frase = document.getElementById("textocifrado") .value. toLowerCase();
    
    var textocifrado = frase.replace(/e/img, "enter");
    var textocifrado = textocifrado.replace(/o/img, "ober");
    var textocifrado = textocifrado.replace(/i/img, "imes");
    var textocifrado = textocifrado.replace(/a/img, "ai");
    var textocifrado = textocifrado.replace(/u/img, "ufat");

     //mostrar en pantalla el textarea
    document.getElementById("textodesencriptado").style.display="inline";

    //ocultar la imagen y el texto de falta de contenido
    document.getElementById("imagen").style.display="none";
    document.getElementById("TextoCaja").style.display="none";
   
    //pasar la información a la caja
    document.getElementById("textodesencriptado").innerHTML = textocifrado;

     //mostrar el boton de copiar
    document.getElementById("botoncopiar").style.display = "show";
    document.getElementById("botoncopiar").style.display = "inline";
    
}

function desencriptar(){
    var frase = document.getElementById("textocifrado") .value. toLowerCase();
    
    var textocifrado = frase.replace(/enter/img, "e");
    var textocifrado = textocifrado.replace(/ober/img, "o");
    var textocifrado = textocifrado.replace(/imes/img, "i");
    var textocifrado = textocifrado.replace(/ai/img, "a");
    var textocifrado = textocifrado.replace(/ufat/img, "u");

    //mostrar en pantalla el textarea
    document.getElementById("textodesencriptado").style.display="inline";
  
    //ocultar la imagen y el texto de falta de contenido
    document.getElementById("imagen").style.display="none";
    document.getElementById("TextoCaja").style.display="none";
    
    //pasar la información a la caja
    document.getElementById("textodesencriptado").innerHTML = textocifrado;

    //mostrar el boton de copiar
    document.getElementById("botoncopiar").style.display = "show";
    document.getElementById("botoncopiar").style.display = "inline";

    
}

function copiar(){
    var contenido= document.querySelector("#textodesencriptado");
    contenido.select();
    document.execCommand("copy");
}