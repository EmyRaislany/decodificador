
function removeSpecialChars() {
    const inputText = document.getElementById("input-text");
    inputText.value = inputText.value.replaceAll(/[^a-z\s]/g, '');
}

function criptografar() {

    let texto = document.getElementById("input-text").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    const outputText = document.getElementById("output-text");
    outputText.value = textoCriptografado || "Nenhuma mensagem encontrada";

    toggleCopiarBotao(outputText.value !== "Nenhuma mensagem encontrada");

    document.getElementById("input-text").value = '';
}

function descriptografar() {
    let texto = document.getElementById("input-text").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    const outputText = document.getElementById("output-text");
    outputText.value = textoDescriptografado || "Nenhuma mensagem encontrada";

    toggleCopiarBotao(outputText.value !== "Nenhuma mensagem encontrada");

    document.getElementById("input-text").value = '';
}

function copiarTexto() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");

    outputText.value = "Nenhuma mensagem encontrada";
    toggleCopiarBotao(false);
    alert("Texto copiado para a área de transferência");
}

function toggleCopiarBotao(mostrar) {
    const copiarBotaoContainer = document.getElementById("copiar-botao-container");
    copiarBotaoContainer.style.display = mostrar ? "flex" : "none";
}
