
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const fim = document.querySelector('.fim');
const btn = document.querySelector('#refresh');
const morrendo = new Audio();
morrendo.src ='./sounds/morrendo.mp3';
const pulando = new Audio();
pulando.src ='./sounds/pulando.mp3';
pulando.currentTime = 0.4;


const jump =() => {  

  mario.classList.add('jump');

  setTimeout(() => {

    mario.classList.remove('jump');

  }, 600);
} 

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`;

    clouds.style.animation = 'none'
    clouds.style.left = `${cloudsPosition}px`;

    mario.src = 'imagens/game-over.png';
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    fim.style.display = 'block'

    morrendo.play();

    clearInterval(loop);
  }

  if (marioPosition > 0){
    pulando.play();
  }

}, 10);

document.addEventListener('keydown', jump);
btn.addEventListener("click", () =>{
  location.reload()
})

