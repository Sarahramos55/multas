
var formulario = document.getElementById("formulario-multas");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var regiao = document.getElementById("regiao").value.trim().toLowerCase();
    var velocidade = document.getElementById("velocidade").value;

    if (nome == "" || regiao == "" || velocidade == "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    var limite;

    if (regiao == "norte") {
        limite = 80;
    } else if (regiao == "nordeste") {
        limite = 100;
    } else if (regiao == "centro-oeste") {
        limite = 70;
    } else if (regiao == "sudeste") {
        limite = 70;
    } else if (regiao == "sul") {
        limite = 60;
    } else {
        alert("Digite uma região brasileira válida!");
        return;
    }

    velocidade = Number(velocidade);

    if (velocidade <= 0) {
        alert("Informe uma velocidade maior que zero!");
        return;
    }

    var excesso = velocidade - limite;
    var resultado;

    if (excesso > 0) {
        resultado = "Velocidade acima do limite!";
    } else {
        excesso = 0;
        resultado = "Velocidade dentro do limite!";
    }

    var dados = {
        nome: nome,
        regiao: regiao,
        velocidade: velocidade,
        limite: limite,
        excesso: excesso,
        resultado: resultado
    };

    sessionStorage.setItem("dadosConsulta", JSON.stringify(dados));

    window.location.href = "../pagn.final/resultado.html"; /*modificar dps*/
});

 
