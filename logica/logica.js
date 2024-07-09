function start() {
    let mainDis = document.querySelector('.main'); // Corrigido para .menu
    let menuIni = document.querySelector('.menu');
    let gameDisplay = document.querySelector('.game');

    menuIni.style.justifyContent = 'space-between'; // Corrigido para menuIni.style
    menuIni.style.display = 'none';
    gameDisplay.style.display = 'flex';
}
