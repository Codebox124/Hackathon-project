const toggleMenu = document.querySelector('#toggle-menu');
const toggleMenuIcon = toggleMenu.querySelector('img');
const menu = document.querySelector('#menu');




const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img') 
toggleTheme.addEventListener('click' , () =>{
    html.classList.toggle('dark')
    const isDark = html.classList.contains('dark')
    const themeIcon = isDark ? 'light' : 'dark'
    toggleThemeIcon.src = `/asset/ icon-${themeicon}.svg`
}) 