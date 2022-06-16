function mudaModo(){
    mudaClasses();
    mudaTexo();
}

function mudaClasses() {
    button.classList.toggle(classeModoNoturno);
    h1.classList.toggle(classeModoNoturno);
    body.classList.toggle(classeModoNoturno);
    footer.classList.toggle(classeModoNoturno);
}

function mudaTexo(){
    const modoNoturno = 'Modo Noturno'
    const modoLight = "Modo Light"
    if(body.classList.contains(classeModoNoturno)){
        button.innerHTML = modoLight;
        h1.innerHTML = modoNoturno + " Ligado !"
        return;
    }
        button.innerHTML = modoNoturno;
        h1.innerHTML = modoLight + " Ligado !"
        return;

}
const classeModoNoturno = 'dark-mode'
const button = document.getElementById('modo-selecao');
const h1 = document.getElementById('titulo-pagina');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', mudaModo)