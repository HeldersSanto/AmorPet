const btnMenu = document.getElementById('btnMenu');


btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('ativo');
    let nav = document.getElementById('nav');
    nav.classList.toggle('ativo');
});

btnMenu.addEventListener('touchstar', ()=>{
    btnMenu.classList.toggle('ativo');
    let nav = document.getElementById('nav');
    nav.classList.toggle('ativo');
});
