// Header Builder
function buildHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return;

  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
        <div class="header-content">
            <a href="./" class="logo">
                <div class="logo-icon">🥚</div>
                Gaminghb.com
            </a>
            
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="./" class="nav-link">Home</a></li>
                            <li><a href="./egg-shooter-news.html" class="nav-link">News</a></li>
        <li><a href="./egg-shooter-contacts.html" class="nav-link">Contact</a></li>
        <li><a href="./egg-shooter-disclaimer.html" class="nav-link">Disclaimer</a></li>
                </ul>
            </nav>
            
            <button class="burger-menu" id="burger-menu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </button>
        </div>
        
        <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-nav-list">
                <li><a href="./" class="mobile-nav-link">Home</a></li>
                        <li><a href="./egg-shooter-news.html" class="mobile-nav-link">News</a></li>
        <li><a href="./egg-shooter-contacts.html" class="mobile-nav-link">Contact</a></li>
        <li><a href="./egg-shooter-disclaimer.html" class="mobile-nav-link">Disclaimer</a></li>
            </ul>
        </div>
    `;

  headerPlaceholder.appendChild(header);

  // Mobile menu functionality
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burgerMenu && mobileMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Footer Builder
function buildFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) return;

  const footer = document.createElement("footer");
  footer.className = "footer";

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>About Egg Shooter 2</h3>
                    <p>Master the art of precision shooting in this addictive bubble shooter game. Match colorful eggs, create explosive combos, and become the ultimate egg blaster!</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="./">Home</a></li>
                                <li><a href="./egg-shooter-news.html">News</a></li>
        <li><a href="./egg-shooter-contacts.html">Contact</a></li>
        <li><a href="./egg-shooter-disclaimer.html">Disclaimer</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <a href="mailto:contact@gaminghb.com">contact@gaminghb.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <a href="tel:+1-403-979-0103">+1 (403) 979-0103</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <span>34 Maple Street, Vancouver, British Columbia V6B 1A1, Canada</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <span class="copyright-year">${currentYear}</span> Gaminghb.com - All rights reserved</p>
                <div style="margin-top: var(--spacing-sm);">
                            <a href="./egg-shooter-cookie-policy.html">Cookie Policy</a> |
        <a href="./egg-shooter-privacy-policy.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    `;

  footerPlaceholder.appendChild(footer);
}

// Initialize builders when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
});
