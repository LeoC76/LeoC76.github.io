
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
//tiroir accordeon
function toggleAccordion(button) {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  const contentId = button.getAttribute('aria-controls');
  const content = document.getElementById(contentId);

  if (expanded) {
    button.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = null;
    content.setAttribute('aria-hidden', 'true');
    content.style.display = 'none';
    button.querySelector('svg').style.transform = 'rotate(0deg)';
  } else {
    // Close all other accordions
    document.querySelectorAll('button[aria-expanded="true"]').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      const cId = btn.getAttribute('aria-controls');
      const c = document.getElementById(cId);
      c.style.maxHeight = null;
      c.setAttribute('aria-hidden', 'true');
      c.style.display = 'none';
      btn.querySelector('svg').style.transform = 'rotate(0deg)';
    });

    button.setAttribute('aria-expanded', 'true');
    content.style.display = 'block';
    content.style.maxHeight = content.scrollHeight + 'px';
    content.setAttribute('aria-hidden', 'false');
    button.querySelector('svg').style.transform = 'rotate(180deg)';
  }
}
 