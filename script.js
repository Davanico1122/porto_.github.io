// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website siap!");

    // --- 1. Smooth Scrolling untuk Navigasi Anchor ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default (melompat instan)

            const targetId = this.getAttribute('href');
            // Pastikan targetId ada dan bukan hanya '#'
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth' // Membuat scroll menjadi halus
                });
            }
        });
    });

    // --- 2. Implementasi Mode Gelap ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Fungsi untuk menerapkan tema (dark atau light)
    function applyTheme(theme) {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; // Ubah ikon ke matahari untuk mode gelap
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙'; // Ubah ikon ke bulan untuk mode terang
        }
    }

    // Cek preferensi tema saat halaman dimuat
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        // Jika ada di localStorage, terapkan tema tersebut
        applyTheme(currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Jika tidak ada di localStorage, tapi sistem user prefer dark mode
        applyTheme('dark-mode');
    } else {
        // Default ke light mode jika tidak ada preferensi
        applyTheme('light-mode');
    }

    // Event listener untuk tombol mode gelap
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light-mode');
            localStorage.setItem('theme', 'light-mode'); // Simpan preferensi
        } else {
            applyTheme('dark-mode');
            localStorage.setItem('theme', 'dark-mode'); // Simpan preferensi
        }
    });

    // --- 3. Animasi Elemen saat Scroll (Intersection Observer API) ---
    // Target elemen yang akan dianimasikan saat masuk viewport
    const elementsToAnimate = document.querySelectorAll('.project-card, .project-card-hero');

    const observerOptions = {
        root: null, // Mengamati viewport sebagai root
        rootMargin: '0px', // Tidak ada margin tambahan
        threshold: 0.1 // Ketika 10% elemen terlihat di viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Tambahkan kelas untuk memicu animasi
                observer.unobserve(entry.target); // Berhenti mengamati setelah animasi dipicu sekali
            }
        });
    }, observerOptions);

    // Mulai mengamati setiap elemen yang ditargetkan
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // --- 4. Interaksi Navbar (perubahan background/shadow saat scroll) ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) { // Jika sudah scroll lebih dari 80px dari atas
            header.classList.add('scrolled'); // Tambahkan kelas 'scrolled'
        } else {
            header.classList.remove('scrolled'); // Hapus kelas 'scrolled'
        }
    });

    // --- 5. Navigasi Aktif (highlight link di navbar saat scroll) ---
    const sections = document.querySelectorAll('section[id]'); // Semua section dengan ID
    const navLinks = document.querySelectorAll('.nav-link'); // Semua link navigasi

    const navObserverOptions = {
        root: null,
        // rootMargin ini membuat Intersection Observer aktif ketika bagian tengah section terlihat
        // Ini lebih akurat untuk menentukan section yang sedang "aktif"
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hapus kelas 'active' dan styling aktif dari semua link terlebih dahulu
                navLinks.forEach(link => {
                    link.classList.remove('active', 'bg-text-secondary', 'text-button-text-active', 'dark:bg-dark-mode-button-active', 'dark:text-dark-mode-button-active-text');
                    link.classList.add('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50', 'dark:hover:bg-dark-mode-bg', 'dark:hover:bg-opacity-50');
                });

                // Tambahkan kelas 'active' dan styling aktif ke link yang sesuai dengan section yang terlihat
                const correspondingLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.remove('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50', 'dark:hover:bg-dark-mode-bg', 'dark:hover:bg-opacity-50');
                    correspondingLink.classList.add('active', 'bg-text-secondary', 'text-button-text-active', 'dark:bg-dark-mode-button-active', 'dark:text-dark-mode-button-active-text');
                }
            }
        });
    }, navObserverOptions);

    // Mulai mengamati setiap section
    sections.forEach(section => {
        navObserver.observe(section);
    });

    // Atur link 'Work'/'Hero' aktif saat pertama kali load atau di-refresh jika di bagian atas
    // Ini menangani kasus ketika halaman dimuat dan belum ada scroll
    if (window.location.hash === '' || window.location.hash === '#hero') {
        const heroLink = document.querySelector('.nav-link[href="#hero"]');
        if (heroLink) {
            heroLink.classList.remove('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50', 'dark:hover:bg-dark-mode-bg', 'dark:hover:bg-opacity-50');
            heroLink.classList.add('active', 'bg-text-secondary', 'text-button-text-active', 'dark:bg-dark-mode-button-active', 'dark:text-dark-mode-button-active-text');
        }
    }
});
