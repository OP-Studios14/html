
const yesButton = document.querySelector('.Yes-Button');
const noButton = document.querySelector('.No-Button');

const yesOffSrc = 'yes_Off.png';
const yesOnSrc = 'yes_On.png';

const clickSound = new Audio('SAO-Button-Click-Sfx.mp3');

yesButton.addEventListener('mouseenter', () => {
 const hoverSound = new Audio('SAO-Button-Hover-Sfx.mp3');
 hoverSound.currentTime = 0;
 hoverSound.play();
  yesButton.src = yesOnSrc;
});
yesButton.addEventListener('mouseleave', () => {
  yesButton.src = yesOffSrc;
});
yesButton.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  clickSound.onended = () => {
  window.location.href = 'site.html';
  };
});

const noOffSrc = 'no_Off.png';
const noOnSrc = 'no_On.png';

noButton.addEventListener('mouseenter', () => {
  const hoverSound = new Audio('SAO-Button-Hover-Sfx.mp3');
  hoverSound.currentTime = 0;
  hoverSound.play();
  noButton.src = noOnSrc;
});
noButton.addEventListener('mouseleave', () => {
  noButton.src = noOffSrc;
});
noButton.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  window.close();
   clickSound.onended = () => {
  window.location.href = 'about:blank';
  };
 
});
