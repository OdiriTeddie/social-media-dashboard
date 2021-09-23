const toggleSwitch = document.querySelector('input[type="checkbox"]');
const overviewTitle = document.querySelector('.overview-title');

// Dark Mode Styles
function darkMode() {
    overviewTitle.style.color = 'var(--on-background-alt)';
}



// Switch Theme Dynamically
function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
        console.log(e.target.checked);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        // lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);