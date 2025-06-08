document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const bodyElement = document.body; // Mengambil elemen <body>

    // --- Fungsi untuk mengaplikasikan mode ---
    function applyTheme(theme) {
        if (theme === 'dark') {
            bodyElement.classList.add('dark-mode'); // Tambah kelas 'dark-mode' ke <body>
            darkModeToggle.textContent = '☀️'; // Icon untuk mode terang
        } else {
            bodyElement.classList.remove('dark-mode'); // Hapus kelas 'dark-mode' dari <body>
            darkModeToggle.textContent = '🌙'; // Icon untuk mode gelap
        }
    }

    // --- Cek preferensi pengguna saat halaman dimuat ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Jika tidak ada preferensi tersimpan, cek preferensi sistem operasi
        applyTheme('dark');
    } else {
        // Default ke mode terang jika tidak ada preferensi atau preferensi sistem adalah terang
        applyTheme('light');
    }

    // --- Event listener untuk tombol toggle ---
    darkModeToggle.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-mode')) {
            // Jika saat ini mode gelap, ubah ke terang
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            // Jika saat ini mode terang, ubah ke gelap
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Penyesuaian Navigasi ---
    const navLinks = document.querySelectorAll('.main-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hapus kelas 'active' dari semua link
            navLinks.forEach(item => {
                item.classList.remove('bg-text-secondary', 'text-button-text-active', 'font-semibold');
                item.classList.add('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50');
            });

            // Tambahkan kelas 'active' ke link yang diklik
            this.classList.add('bg-text-secondary', 'text-button-text-active', 'font-semibold');
            this.classList.remove('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50');
        });
    });

    // Handle initial active state on load if hash is present
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`.main-nav .nav-link[href="${currentHash}"]`);
        if (activeLink) {
            navLinks.forEach(item => {
                item.classList.remove('bg-text-secondary', 'text-button-text-active', 'font-semibold');
                item.classList.add('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50');
            });
            activeLink.classList.add('bg-text-secondary', 'text-button-text-active', 'font-semibold');
            activeLink.classList.remove('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50');
        }
    }

    // --- Efek Header Saat Scroll ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Tambahkan kelas 'scrolled' jika di-scroll lebih dari 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Intersection Observer untuk Animasi Project Card ---
    const projectCards = document.querySelectorAll('.project-card, .project-card-hero');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% elemen terlihat
    };

    const projectCardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah terlihat
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        projectCardObserver.observe(card);
    });
});
