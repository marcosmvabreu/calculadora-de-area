calcular = document.getElementById('calcular')

function clickCalcular(){
    const altura = document.getElementById('altura').value
    const base = document.getElementById('base').value
    const resultado = document.getElementById('resultado')

    if(altura != "" && base != ""){
        const areaRetangulo = altura * base
        resultado.textContent = `Área do retângulo = ${areaRetangulo} cm`
    }
    else{
        resultado.textContent = `Preencha todos os campos!!`
    }
}

calcular.addEventListener('click', clickCalcular)