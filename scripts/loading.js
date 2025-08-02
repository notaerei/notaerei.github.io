window.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const video = document.getElementById('loading-video');

  video.play().catch(() => {
    video.muted = true;
    video.play();
  });

  document.body.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      video.play();
    }
  }, { once: true });

  setTimeout(() => {
    loadingScreen.classList.add('fade-out');

    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }, 500);
});
