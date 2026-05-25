document.addEventListener('DOMContentLoaded', () => {
  const currentTime = new Date();
  const mark = document.querySelector('.pill');

  if (mark) {
    mark.textContent = `Atualizado ${currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
  }

  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    bar.animate([
      { transform: 'scaleY(0.2)', transformOrigin: 'bottom' },
      { transform: 'scaleY(1)' }
    ], {
      duration: 700 + index * 120,
      fill: 'forwards',
      easing: 'ease-out'
    });
  });
});
