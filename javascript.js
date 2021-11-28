function apostar () {
    var fla = document.getElementById("placarF").value
    var pal = document.getElementById("placarP").value
    var apostador = document.getElementById("nomeApostador").value

    if (fla == pal) {
        /*setstyle '.\style.css' = '#penalte', visibility=hidden;*/
        document.getElementById("penaltP").value = prompt("Quantos Penalts o Palmeiras vai acertar? ")
        document.getElementById("penaltF").value = prompt("Quantos Penalts o Flamengo vai acertar? ")
    }else {

    }
}




/*

//Cria Objeto ActiveX
var dados = new ActiveXObject("Scripting.FileSystemObject");

//Função para gravar o arquivo
function GravaArquivo(arq,texto){
//pasta a ser salvo o arquivo
var pasta="C:/Documents and Settings/Computador2/Desktop/LerGravartxtcomJS/";
//se o parametro arq que é o nome do arquivo vier vazio ele salvará o arquivo com o nome “Sem Titulo”
if(arq==""){arq="Sem Titulo";}
//carrega o txt
var esc = dados.CreateTextFile(pasta+arq+”.txt”, false);
//escreve o que foi passado no parametro texto que é o texto contido no TextArea
esc.WriteLine(texto);
//fecha o txt
esc.Close();
}
//Função para abrir o arquivo
function AbreArquivo(arq){
//o parametro arq é o endereço do txt
//carrega o txt
var arquivo = dados.OpenTextFile(arq, 1, true);
//varre o arquivo
while(!arquivo.AtEndOfStream){
//escreve o txt no TextArea
document.getElementById(“texto”).value = arquivo.ReadAll();
}
//fecha o txt
arquivo.Close();
}
*/