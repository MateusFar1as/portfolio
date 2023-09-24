const sobre = document.querySelector('.sobre')
const habilidade = document.querySelector('.habilidades')

const buttonSobre = document.querySelector('.buttonSobre')
const buttonHabilidade = document.querySelector('.buttonHabilidade')


function buttonS(){
    sobre.style.display = 'block'
    habilidade.style.display = 'none'

    buttonSobre.classList.add('buttonSelected')
    buttonHabilidade.classList.remove('buttonSelected')
}

function buttonH(){
    sobre.style.display = 'none'
    habilidade.style.display = 'flex'

    buttonSobre.classList.remove('buttonSelected')
    buttonHabilidade.classList.add('buttonSelected')
}