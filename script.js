const sobre = document.querySelector('.sobre')
const habilidade = document.querySelector('.habilidades')
const curriculo = document.querySelector('.curriculo')

const buttonSobre = document.querySelector('.buttonSobre')
const buttonHabilidade = document.querySelector('.buttonHabilidade')
const buttonCurriculo = document.querySelector('.buttonCurriculo')


function buttonS(){
    sobre.style.display = 'block'
    habilidade.style.display = 'none'
    curriculo.style.display = 'none'

    buttonSobre.classList.add('buttonSelected')
    buttonHabilidade.classList.remove('buttonSelected')
    buttonCurriculo.classList.remove('buttonSelected')
}

function buttonH(){
    sobre.style.display = 'none'
    habilidade.style.display = 'flex'
    curriculo.style.display = 'none'

    buttonSobre.classList.remove('buttonSelected')
    buttonHabilidade.classList.add('buttonSelected')
    buttonCurriculo.classList.remove('buttonSelected')
}

function buttonC(){
    sobre.style.display = 'none'
    habilidade.style.display = 'none'
    curriculo.style.display = 'flex'

    buttonSobre.classList.remove('buttonSelected')
    buttonHabilidade.classList.remove('buttonSelected')
    buttonCurriculo.classList.add('buttonSelected')
}