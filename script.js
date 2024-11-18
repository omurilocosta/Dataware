const seleciona = (elemento) => document.querySelector(elemento)

const abrirModalFC = () => {
    seleciona('.janela-modal').style.display = 'flex'
}
const fecharModalFC = () => {
    seleciona('.janela-modal').style.display = 'none'
}
const irHome = () => {
    window.location.href = 'home.html'
}