function changeTheme() {
  const rootElement = document.documentElement;
  const currentTheme = rootElement.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    rootElement.setAttribute('data-theme', 'light');
  } else {
    rootElement.setAttribute('data-theme', 'dark');
  }
}