// Dark Mode Toggle Script
(function() {
    'use strict';
    
    // Initialize dark mode from localStorage
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const htmlElement = document.documentElement;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply saved preference on page load
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fa fa-sun-o"></i>';
            darkModeToggle.title = 'Light Mode';
        }
    } else {
        document.body.classList.remove('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fa fa-moon-o"></i>';
            darkModeToggle.title = 'Dark Mode';
        }
    }
    
    // Handle toggle button clicks
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            const isCurrentlyDark = document.body.classList.contains('dark-mode');
            
            if (isCurrentlyDark) {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
                darkModeToggle.innerHTML = '<i class="fa fa-moon-o"></i>';
                darkModeToggle.title = 'Dark Mode';
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
                darkModeToggle.innerHTML = '<i class="fa fa-sun-o"></i>';
                darkModeToggle.title = 'Light Mode';
            }
        });
    }
})();
