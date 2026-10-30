
var dadosSalvos = sessionStorage.getItem("dadosConsulta");

if (dadosSalvos == null) {

    alert("Nenhuma consulta foi encontrada!");

} else {

    var dados = JSON.parse(dadosSalvos);

    var regiaoFormatada = dados.regiao;

    if (dados.regiao == "norte") {
        regiaoFormatada = "Norte";
    } else if (dados.regiao == "nordeste") {
        regiaoFormatada = "Nordeste";
    } else if (dados.regiao == "centro-oeste") {
        regiaoFormatada = "Centro-Oeste";
    } else if (dados.regiao == "sudeste") {
        regiaoFormatada = "Sudeste";
    } else if (dados.regiao == "sul") {
        regiaoFormatada = "Sul";
    }

    var mensagem = "Olá, " + dados.nome + "!\n\n";

    mensagem += "Na região " + regiaoFormatada;
    mensagem += ", o limite definido é de " + dados.limite + " km/h.\n\n";

    mensagem += "Sua velocidade foi de " + dados.velocidade + " km/h.\n\n";

    if (dados.excesso > 0) {

        mensagem += "Você ultrapassou o limite em ";
        mensagem += dados.excesso + " km/h.\n\n";

    } else {

        mensagem += "Sua velocidade está dentro do limite definido.\n\n";

    }

    mensagem += "Resultado: " + dados.resultado;

    document.getElementById("resultado-consulta").textContent = mensagem;

}
