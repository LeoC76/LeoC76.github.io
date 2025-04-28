
// Mobile menu toggle
 const menuBtn = document.getElementById('menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');
 menuBtn.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
 });
 // Custom orange dot cursor
 const cursor = document.getElementById('cursor');
 window.addEventListener('mousemove', e => {
   cursor.style.left = e.clientX + 'px';
   cursor.style.top = e.clientY + 'px';
 });
 // Enlarge cursor on interactive elements
 const interactiveElements = document.querySelectorAll('a, button, input, textarea');
 interactiveElements.forEach(el => {
   el.addEventListener('mouseenter', () => {
     cursor.style.width = '24px';
     cursor.style.height = '24px';
     cursor.style.backgroundColor = '#d87a2a';
   });
   el.addEventListener('mouseleave', () => {
     cursor.style.width = '14px';
     cursor.style.height = '14px';
     cursor.style.backgroundColor = '#f2994a';
   });
 });
 