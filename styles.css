/* style.css */

/* Global Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Base Body Transition for Dark Mode */
body {
    transition: background-color 0.5s ease, color 0.5s ease;
}

/* --- Dark Mode Styles --- */
body.dark-mode {
    background-color: #0D1A1A; /* dark-mode-bg */
    color: #E0F2F2; /* dark-mode-text */
}

body.dark-mode .main-header {
    background-color: rgba(13, 26, 26, 0.9); /* Sedikit transparan */
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

body.dark-mode .main-nav {
    background-color: #223838; /* dark-mode-accent */
}

body.dark-mode .nav-link {
    color: #E0F2F2; /* dark-mode-text */
}

body.dark-mode .nav-link.active {
    background-color: #4A6A6A; /* dark-mode-button-active */
    color: #E0F2F2; /* dark-mode-button-active-text */
}

body.dark-mode .nav-link:hover {
    background-color: rgba(13, 26, 26, 0.5); /* hover:bg-dark-mode-bg hover:bg-opacity-50 */
}

body.dark-mode .about-section {
    background-color: #223838; /* dark-mode-accent */
}

body.dark-mode .about-section h2 {
    color: #E0F2F2; /* dark-mode-text */
}

body.dark-mode .about-section p {
    color: #E0F2F2; /* dark-mode-text */
}


/* --- Custom Animations --- */

/* Fade In Up (untuk judul hero dan teks) */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0; /* Awalnya sembunyikan */
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
/* Tambahkan delay sesuai kebutuhan */


/* Initial state for project cards (before they are observed) */
.project-card, .project-card-hero {
    opacity: 0;
    transform: translateY(40px) scale(0.95); /* Sedikit lebih ke bawah dan kecil */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Class added by JS when element is visible */
.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
}

/* Star Pulse Animation */
@keyframes star-pulse {
    0% { transform: scale(1) rotate(45deg); opacity: 0.2; }
    50% { transform: scale(1.1) rotate(45deg); opacity: 0.35; }
    100% { transform: scale(1) rotate(45deg); opacity: 0.2; }
}

.star {
    animation: star-pulse 4s infinite alternate ease-in-out;
}
/* Untuk membuat setiap bintang sedikit berbeda */
.star:nth-child(1) { animation-delay: 0s; }
.star:nth-child(2) { animation-delay: 0.5s; }
.star:nth-child(3) { animation-delay: 1s; animation-duration: 3s; }
.star:nth-child(4) { animation-delay: 1.5s; animation-duration: 5s; }


/* Header Scrolled State */
.main-header.scrolled {
    background-color: rgba(27, 50, 49, 0.95); /* background yang lebih solid saat discroll */
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    padding-top: 0.75rem; /* py-3 */
    padding-bottom: 0.75rem; /* py-3 */
}

/* Optional: Custom scrollbar (hanya di browser tertentu) */
/*
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #2e494a;
}

::-webkit-scrollbar-thumb {
    background: #a8e1cb;
    border-radius: 10px;
}
*/
