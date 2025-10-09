const buttons = document.querySelectorAll('.Button');
const clickSound = new Audio('SAO-Button-Click-Sfx.mp3');

  buttons.forEach(button => {
    const offSrc = button.getAttribute('src'); // e.g., "Course_Off.png"
    const onSrc = offSrc.replace('_Off', '_On'); // e.g., "Course_On.png"
    const page = onSrc.replace('_On.png','.html');
    
    // On hover - switch to "On"
    button.addEventListener('mouseenter', () => {
      const hoverSound = new Audio('SAO-Button-Hover-Sfx.mp3');
      hoverSound.currentTime = 0;
      hoverSound.play();
      button.src = onSrc;
    });

    // On mouse leave - switch back to "Off"
    button.addEventListener('mouseleave', () => {
      button.src = offSrc;
    });

     button.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
      clickSound.onended = () => {
         window.location.href = page;
       };
      
    });
  });

