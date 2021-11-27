function apostar(){
    var fla = document.getElementById("placarF").value
    var pal = document.getElementById("placarP").value
    var apostador = document.getElementById("nomeApostador").value

    var r = confirm("Confirma a aposta de: \n PAL "+pal+" X "+fla+" FLA")

    if (r == true) {
        if (fla == pal){
            alert(apostador + " você apostou no empate!!!")
            var pPal = prompt("Quantos penalts o Palmeiras vai acertar?");
            var pFla = prompt("Quantos penalts o Flamengo vai acertar?");
        }
    }else {
        
    }
alert("APOSTA FEITA, PARA VALIDAR SÓ FAZER O PIX")
}