document.addEventListener('DOMContentLoaded', () => {
  // Typing animation
  const dynamicText = document.querySelector('.dynamic-text');
  const phrases = ['Web Developer', 'Programmer', 'Tech Enthusiast'];
  let i = 0, j = 0;
  
  function type() {
      if (j < phrases[i].length) {
          dynamicText.innerHTML += phrases[i].charAt(j);
          j++;
          setTimeout(type, 150);
      } else {
          setTimeout(erase, 2000);
      }
  }

  function erase() {
      if (j > 0) {
          dynamicText.innerHTML = phrases[i].substring(0, j-1);
          j--;
          setTimeout(erase, 100);
      } else {
          i = (i + 1) % phrases.length;
          setTimeout(type, 1000);
      }
  }

  setTimeout(type, 1000);

  // Custom pointer
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
  });
});
