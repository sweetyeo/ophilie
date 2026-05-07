function launchConfetti() {
  const colors = ['#f7a8c0', '#e05878', '#fde0ea', '#d44070', '#ffccd8', '#b03058'];

  for (let i = 0; i < 55; i++) {
    setTimeout(function() {
      const dot = document.createElement('div');
      dot.classList.add('confetti-dot');
      dot.innerHTML = '♡';

      dot.style.color = colors[Math.floor(Math.random() * colors.length)];
      dot.style.left = Math.random() * 100 + 'vw';
      dot.style.top = '-10px';
      dot.style.fontSize = (12 + Math.random() * 16) + 'px';
      dot.style.animationDuration = (3.2 + Math.random() * 0.8) + 's';

      document.body.appendChild(dot);

      setTimeout(function() {
        dot.remove();
      }, 4200);

    }, i * 22);
  }
}