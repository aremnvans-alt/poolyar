document.addEventListener("DOMContentLoaded", function() {
    
    /* ================= MENU ================= */
    
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuLinks = document.querySelectorAll(".menu-nav a");
    
    
    function openMenu() {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
        
        document.body.style.overflow = "hidden";
    }
    
    
    function closeMenu() {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        
        document.body.style.overflow = "";
    }
    
    
    if (menuToggle) {
        menuToggle.addEventListener("click", openMenu);
    }
    
    
    if (menuClose) {
        menuClose.addEventListener("click", closeMenu);
    }
    
    
    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeMenu);
    }
    
    
    menuLinks.forEach(function(link) {
        
        link.addEventListener("click", function() {
            closeMenu();
        });
        
    });
    
    
    /* ================= ESC KEY ================= */
    
    document.addEventListener("keydown", function(event) {
        
        if (event.key === "Escape") {
            closeMenu();
        }
        
    });
    
    
    /* ================= THEME ================= */
    
    const themeToggle = document.getElementById("themeToggle");
    
    
    function updateThemeIcon() {
        
        if (!themeToggle) {
            return;
        }
        
        if (document.body.classList.contains("light")) {
            themeToggle.textContent = "🌙";
            themeToggle.setAttribute("aria-label", "فعال کردن حالت تاریک");
        } else {
            themeToggle.textContent = "☀️";
            themeToggle.setAttribute("aria-label", "فعال کردن حالت روشن");
        }
        
    }
    
    
    const savedTheme = localStorage.getItem("poolyar-theme");
    
    
    if (savedTheme === "light") {
        document.body.classList.add("light");
    }
    
    
    updateThemeIcon();
    
    
    if (themeToggle) {
        
        themeToggle.addEventListener("click", function() {
            
            const isLight = document.body.classList.toggle("light");
            
            localStorage.setItem(
                "poolyar-theme",
                isLight ? "light" : "dark"
            );
            
            updateThemeIcon();
            
        });
        
    }
    
    
    /* ================= CLOSE MENU AFTER RESIZE ================= */
    
    window.addEventListener("resize", function() {
        
        if (window.innerWidth > 900) {
            closeMenu();
        }
        
    });
    
});