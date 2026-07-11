const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = document.getElementById('theme-icon');

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
  if (currentTheme === 'dark-theme') {
    icon.textContent = '☀️';
  } else {
    icon.textContent = '🌙';
  }
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
    icon.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light-theme');
    icon.textContent = '🌙';
  }
});
