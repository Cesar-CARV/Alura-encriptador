const inputTextArea = document.querySelector('#input-textArea');
const outputTextArea = document.querySelector('#output-textArea');

const btnEncriptar = document.querySelector('#btn-encriptar');
const btnDesencriptar = document.querySelector('#btn-desencriptar');
const btnCopiar = document.querySelector('#btn-copiar');

const cript = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

btnEncriptar.addEventListener('click', e => {
    let input = inputTextArea.value;
    let output = input.split('').map(c => cript[c] ? cript[c] : c).join('');
    outputTextArea.value = output;
});

btnDesencriptar.addEventListener('click', e => {
    let input = inputTextArea.value;
    let output = new String(input);
    Object.keys(cript).forEach((x, i ) => {
        output = output.replaceAll(cript[x], x);
    });
    outputTextArea.value = output;
});

btnCopiar.addEventListener("click", e => {
    outputTextArea.select();
    document.execCommand('copy');
    let info = document.querySelector('#mesage-info');
    info.innerText = "Mensaje copiado";
    setTimeout(() => {
        info.innerText = ".";
    },2000);
});