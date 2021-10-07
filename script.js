function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const divTheBai = document.querySelector('.thebai-img');
const btnShuffle = document.querySelector('.shuffle-btn');
const imgTheBai = document.querySelector('.img')

function render() {
    const rndInt = randomIntFromInterval(1, 48);
    var html = `<img src="./assets/img/${rndInt}.jpg" alt="" class="img">`;
    divTheBai.innerHTML = html;
}

btnShuffle.addEventListener('click', () => {
    render();
})