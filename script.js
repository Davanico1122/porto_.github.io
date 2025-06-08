document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light');
});
