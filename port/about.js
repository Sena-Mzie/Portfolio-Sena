// Basic carousel interactivity for smooth scrolling
document.querySelectorAll('.carousel').forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;
  
    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('mouseleave', () => {
      isDown = false;
    });
  
    carousel.addEventListener('mouseup', () => {
      isDown = false;
    });
  
    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    });
  });

  const navbar = document.getElementById('navbar');
const textBox = document.getElementById('about-text-box');

textBox.addEventListener('scroll', () => {
  if (textBox.scrollTop > 20) {
    navbar.style.top = '-60px'; // Hides the navbar
  } else {
    navbar.style.top = '0'; // Shows the navbar
  }
});
