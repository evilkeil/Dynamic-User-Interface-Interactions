const icon = document.querySelector('.icon');

icon.addEventListener('click', function() {
  const open = icon.querySelector('.open');
  const close = icon.querySelector('.close');
  
  open.style.display = open.style.display === 'none' ? 'block' : 'none';
  close.style.display = close.style.display === 'none' ? 'block' : 'none';
});
