var alternador = ["ai", "enter", "imes", "ober", "ufat" ];
var alternador1 = ["a", "e", "i", "o", "u"]
        // var remplazado=palabra.replace(/e/igm,alternador[1].replace(/i/igm,alternador[2]))
        // .replace(/a/igm,alternador[0]).replace(/o/igm,alternador[3]).replace(/u/igm,alternador[4]);
      // console.log("mostrar: "+remplazado);
function encriptador(){
    var palabra = document.getElementById("textoEntrada").value.toLowerCase();
    var arr = palabra.split("");
    for(var i=0; i<=arr.length;i++){  
        var hola = arr.includes("e");
        var hola1= arr.includes("i");
        var hola2= arr.includes("a");
        var hola3= arr.includes("o");
        var hola4= arr.includes("u");
        console.log("mostrar: "+hola);
        if(hola==true || hola1==true ||hola2==true ||hola3==true || hola4==true ){
            var remplazado=palabra.replace(/e/igm,alternador[1]).replace(/i/igm,alternador[2])
            .replace(/a/igm,alternador[0]).replace(/o/igm,alternador[3]).replace(/u/igm,alternador[4]);
            console.log("mostrar: "+remplazado);
            break;
        }    
        else{
            alert("No hay un texto valido, porfavor ingresa de nuevo el texto ")
            break;
        }
    }
    document.getElementById("munecho").style.display="none";
    document.getElementById("textArea").style.display="none";
    document.getElementById("textZone").style.display="none";
    document.getElementById("textResult").innerHTML=remplazado;
    document.getElementById("textResult").style.display="show";
    document.getElementById("textResult").style.display="inherit";
    document.getElementById("copiar").style.display="show";
    document.getElementById("resultado").style.display="show";
    document.getElementById("resultado").style.display="inherit";
    document.getElementById("copiar").style.display="inherit";
} 
function desencriptador(){
    var palabra = document.getElementById("textResult").value.toLowerCase();
    var encrip=palabra.replace(/enter/igm,"e");
    var encrip=encrip.replace(/ober/igm,"o");
    var encrip=encrip.replace(/imes/igm,"i");
    var encrip=encrip.replace(/ai/igm,"a");
    var encrip=encrip.replace(/ufat/igm,"u");
    document.getElementById("munecho").style.display="none";
    document.getElementById("textArea").style.display="none";
    document.getElementById("textZone").style.display="none";
    document.getElementById("textResult").innerHTML=encrip;
    document.getElementById("textResult").style.display="show";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}              
    
function copiar(){
    var contenido = document.querySelector("#textResult")
    contenido.select();
    document.execCommand("copy")
}
