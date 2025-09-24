// script.js
window.addEventListener('DOMContentLoaded', () => {
  const logoWrapper = document.getElementById('logoWrapper');
  const leftSection = document.getElementById('leftSection');
  const rightSection = document.getElementById('rightSection');
  const menuBtn = document.getElementById('menuBtn');
  const menuDropdown = document.getElementById('menuDropdown');

  // 1) Only logo drops (birds removed)
  setTimeout(() => {
    logoWrapper.classList.add('drop');
  }, 500);

  // 2) After 5s, hide the logo
  setTimeout(() => {
    logoWrapper.style.display = 'none';
  }, 5000);

  // 3) Reveal split sections after 6s
  setTimeout(() => {
    leftSection.classList.add('show');
    rightSection.classList.add('show');
  }, 6000);

  // 4) Menu toggle + click outside to close
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
  });
  document.addEventListener('click', () => (menuDropdown.style.display = 'none'));
});
document.getElementById('leftSection').addEventListener('click', () => {
  window.location.href = 'about.html';
});
document.getElementById('rightSection').addEventListener('click', () => {
  window.location.href = 'form.html';
});