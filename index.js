

const confirmar =  document.getElementById('confirmar')
const sair = document.getElementById('sair')
let saldo = 0

function clickConfirmar(){
    
    const saldoFinal = document.getElementById('saldo')
    const opcao = document.getElementById('opcao')
    const opcaoEscolhida = opcao.options[opcao.selectedIndex].value
    const valor = parseFloat(document.getElementById('valor').value)

    if(valor != ""){      
        if(opcaoEscolhida == "deposito"){
            saldo = saldo + valor
        }
        else if(opcaoEscolhida == "saque"){
            saldo = saldo - valor
        } 

        saldoFinal.textContent =`R$ ${saldo}`
    }
    else{
        alert("Digite um valor!!")
    }
        
}

function clickSair(){
    alert("Saindo do programa...")
}

confirmar.addEventListener('click',clickConfirmar)
sair.addEventListener('click', clickSair)