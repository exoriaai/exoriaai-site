document.addEventListener('DOMContentLoaded', () => {
  const glow = document.querySelector('.glow-pulse');
  if (glow) {
    glow.style.transition = 'all 0.3s ease-in-out';
    glow.addEventListener('mouseenter', () => {
      glow.style.boxShadow = '0 0 25px #00ffae, 0 0 50px #00ffae';
    });
    glow.addEventListener('mouseleave', () => {
      glow.style.boxShadow = '0 0 15px #00ffae';
    });
  }
});
