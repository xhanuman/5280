var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
var menuLinks = menuContainer.querySelectorAll('a');
var autoCloseTimer = null;
var AUTO_CLOSE_DELAY = 3000; // 3 seconds

function openMenu() {
    menuContainer.classList.add('open');
    menuTrigger.classList.add('is-active');
    menuTrigger.setAttribute('aria-expanded', 'true');
    body.classList.add('lock-scroll');
    resetAutoClose();
}

function closeMenu() {
    menuContainer.classList.remove('open');
    menuTrigger.classList.remove('is-active');
    menuTrigger.setAttribute('aria-expanded', 'false');
    body.classList.remove('lock-scroll');
    clearAutoClose();
}

function resetAutoClose() {
    clearAutoClose();
    autoCloseTimer = setTimeout(function() {
        closeMenu();
    }, AUTO_CLOSE_DELAY);
}

function clearAutoClose() {
    if (autoCloseTimer) {
        clearTimeout(autoCloseTimer);
        autoCloseTimer = null;
    }
}

// Toggle menu on hamburger click
menuTrigger.onclick = function() {
    if (menuContainer.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
};

// Close menu when a link is clicked
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function() {
        closeMenu();
    });
}

// Reset auto-close timer on any interaction within the menu
menuContainer.addEventListener('touchstart', resetAutoClose);
menuContainer.addEventListener('mousemove', resetAutoClose);
