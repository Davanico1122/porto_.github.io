/* style.css */

/* --- Import Google Fonts (Alternatif dari HTML Link) --- */
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap'); */

/* --- Base Styles (Global) --- */
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #1b3231; /* dark-bg */
    color: #d1ede3; /* text-primary */
    -webkit-font-smoothing: antialiased; /* Anti-aliasing for smoother fonts */
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #a8e1cb; /* text-secondary or a similar accent */
}

/* --- Layout (jika tidak menggunakan Tailwind grid/flexbox secara penuh) --- */
.container {
    max-width: 1280px; /* Contoh max-width untuk container */
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem; /* px-6 */
    padding-right: 1.5rem; /* px-6 */
}

/* --- Header / Navbar Styles --- */
.main-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem; /* py-8 */
    padding-bottom: 2rem;
    position: relative;
    z-index: 10;
}

.main-nav {
    background-color: #2e494a; /* dark-accent */
    border-radius: 9999px; /* full rounded */
    padding: 0.5rem; /* p-2 */
    display: flex;
    gap: 0.5rem; /* space-x-2 */
}

.nav-link {
    padding: 0.5rem 1.5rem; /* px-6 py-2 */
    border-radius: 9999px;
    color: #d1ede3; /* button-text-inactive */
    font-size: 1.125rem; /* text-lg */
    transition: background-color 300ms ease;
}

.nav-link:hover {
    background-color: rgba(27, 50, 49, 0.5); /* hover:bg-dark-bg hover:bg-opacity-50 */
}

.nav-link.active { /* Kelas untuk link aktif */
    background-color: #a8e1cb; /* text-secondary */
    color: #1b3231; /* button-text-active */
    font-weight: 600; /* font-semibold */
}

/* --- Hero Section Styles --- */
.hero-section {
    text-align: center;
    padding-top: 5rem; /* py-20 */
    padding-bottom: 5rem;
    position: relative;
    overflow: hidden;
}

.hero-title {
    font-size: 6rem; /* text-6xl, md:text-8xl */
    font-weight: 800; /* font-extrabold */
    line-height: 1; /* leading-none */
    margin-bottom: 1.5rem; /* mb-6 */
    margin-top: 4rem; /* mt-16 */
    color: #a8e1cb; /* text-secondary */
}

/* --- Project Card Styles --- */
.project-card {
    position: relative;
    border-radius: 3rem; /* rounded-5xl */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
    overflow: hidden;
    height: 24rem; /* h-96 */
    padding: 2rem; /* p-8 */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: transform 300ms ease;
}

.project-card:hover {
    transform: scale(1.05);
}

.project-card.purple {
    background-color: #bf80ff; /* card-purple */
    color: white;
}

.project-card.teal {
    background-color: #66ccff; /* card-teal */
    color: white;
}

.project-card.orange {
    background-color: #ffb266; /* card-orange */
    color: white;
}

/* ... dan seterusnya untuk setiap bagian ... */

/* Media Queries untuk Responsivitas (jika tidak pakai utility Tailwind) */
/* @media (min-width: 768px) {
    .main-header {
        justify-content: space-between;
    }
    .hero-title {
        font-size: 8rem;
    }
} */
