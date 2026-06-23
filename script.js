function validarContato(event) {
    event.preventDefault();

    let nomeDigitado = document.getElementById("nome").value;
    let emailDigitado = document.getElementById("email").value;

    if (nomeDigitado !== "" && emailDigitado !== "") {
        alert("Obrigado, " + nomeDigitado + "! Seus dados foram validados via JavaScript.");
        console.log("Sucesso no envio! E-mail cadastrado: " + emailDigitado);
        
        document.getElementById("meuFormulario").reset();
    } else {
        alert("Erro no preenchimento dos campos.");
    }
}

function mudarConteudoDoDOM() {
    
    const titulo = document.getElementById("titulo-pagina");
    const descricao = document.getElementById("texto-descricao");

    titulo.innerText = "DOM modificado";
    descricao.innerText = "Este novo texto e a nova cor de fundo foram injetados através da manipulação do DOM.";

    titulo.style.color = "#ff6347";
    
    descricao.style.backgroundColor = "#eef9ff";
    descricao.style.padding = "15px";
    descricao.style.borderRadius = "5px";
}