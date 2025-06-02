document.addEventListener('DOMContentLoaded', () => {
   const hoverSound = new Audio('/audio/bites/pagecorner.mp3');
   const transitionSound = new Audio('/audio/bites/pageturn.mp3');
   const links = document.querySelectorAll('a');
  
   document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (event) => {
          transitionSound.play();
          setTimeout(() => {
              window.location = event.target.href;
          }, 500);
      });
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