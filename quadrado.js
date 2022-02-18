
calcular = document.getElementById('calcular')

function clickCalcular(){
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    if(altura != ""){
        const areaQuadrado = altura*altura
        resultado.textContent = `Área do quadrado = ${areaQuadrado} cm`
    }
    else{
        resultado.textContent = `Preencha o campo "Altura"!!`
    }

    
}

calcular.addEventListener('click',clickCalcular)
