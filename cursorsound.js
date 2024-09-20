document.addEventListener('DOMContentLoaded', () => {
   const hoverSound = new Audio('../audio/bites/whoop.wav');
   const clickSoundPath = '../audio/bites/click.wav';
   const clickSound = new Audio('../audio/bites/click.wav');
   const transitionSound = new Audio('../audio/bites/badum.wav');
   const links = document.querySelectorAll('a');
  
   document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (event) => {
          transitionSound.play();
          setTimeout(() => {
              window.location = event.target.href;
          }, 500);
      });
   });
   
   document.addEventListener('mousedown', () => {
      const clickSound = new Audio(clickSoundPath);
      clickSound.play();
   });


   links.forEach(link => {
      link.addEventListener('mouseenter', () => {
         hoverSound.play();
      });
  
      link.addEventListener('mouseleave', () => {
         hoverSound.pause();
         hoverSound.currentTime = 0;
      });
   });
 });