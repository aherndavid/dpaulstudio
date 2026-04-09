document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('mobile-nav-container');
    if (!navContainer) return;

    // 1. Get the current filename (e.g., "music.html")
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. Inject the HTML
    navContainer.innerHTML = `
        <div class="nav-wrapper">
            <div class="nav-brand">// dPaul studio</div>
            <button class="burger" id="burgerBtn" aria-label="Menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="mobile-menu" id="mobileMenu">
            <a href="design.html" data-page="design.html">design</a>
            <a href="merch.html" data-page="merch.html">merch</a>
            <a href="music.html" data-page="music.html">music</a>
            <a href="synths.html" data-page="synths.html">synths</a>
            <a href="tools.html" data-page="tools.html">tools</a>
            <a href="video.html" data-page="video.html">video</a>
            <a href="dev-tools.html" data-page="dev-tools.html">dev tools</a>
            <a href="about.html" data-page="about.html">info</a>
        </div>
    `;

    // 3. Automatically set the active class
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPath) {
            link.classList.add('active');
        }
    });

    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // 4. Logic to open/close
    burgerBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.toggle('open');
        this.classList.toggle('active');
        
        // Accessibility: Toggle aria-expanded
        this.setAttribute('aria-expanded', isOpen);
        
        // Prevent background scrolling
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
});
