const textArea = document.querySelector (".text-area");

const mensaje = document.querySelector (".mensaje");

const copia = document.querySelector (".copiar");
copia.style.display = "none";

function validarTexto () {

    let textoEscrito = document.querySelector (".text-area").value;
    let validador = textoEscrito.match (/^[a-z]*$/);

    if (!validador || validador.length === 0) {

        alert("Solo son permitidas letras minusculas y sin acentos ni caracteres especiales")
        location.reload ();
        return true;

    }
}

function btmEncriptar () {

    if (!validarTexto ()){

        const textoEncriptado = encriptar (textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    }

}

function encriptar (stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase ()

    for ( let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes (matrizCodigo [i] [0])) {
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i] [0], matrizCodigo [i] [1])

        }
    }
    return stringEncriptada

}

function btmDesencriptar () {

    const textoEncriptado = desencriptar (textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar (stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase ()

    for ( let i = 0; i < matrizCodigo.length; i++) {

        if (stringDesencriptada.includes (matrizCodigo [i] [1])) {
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i] [1], matrizCodigo [i] [0])

        }
    }
    return stringDesencriptada

}

function copiar () {
    const textoCopiado = copiar (textArea.value);
    mensaje.value = textoCopiado
    textArea.value = "";
    alert ("Texto copiado")

}

function copiar (stringCopiado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCopiado = stringCopiado.toLowerCase ();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringCopiado.includes (matrizCodigo [i] [1])) {
            stringCopiado = stringCopiado.replaceAll (matrizCodigo [i] [1], matrizCodigo [i] [0])
           
        }
    }

    return stringCopiado;
}

