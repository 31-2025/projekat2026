    const hamburger = document.getElementById('hamburger');
    const menuItems = document.getElementById('menuItems');

    hamburger.addEventListener('click', () => {
        if (menuItems.style.display === 'flex') {
            menuItems.style.display = 'none';
        } else {
            menuItems.style.display = 'flex';
        }
    });

