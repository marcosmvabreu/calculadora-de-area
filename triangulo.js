
calcular = document.getElementById('calcular')

function clickCalcular(){
    const base = document.getElementById('base').value 
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    if(base != "" && altura != ""){
        const areaTriangulo = (base*altura) / 2
        resultado.textContent = `Área do triangulo = ${areaTriangulo} cm`
    }
    else{
        resultado.textContent = `Prencha todos os campos!!`
    }
    
}

calcular.addEventListener('click',clickCalcular)
