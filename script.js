// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website siap!");

    // --- 1. Smooth Scrolling untuk Navigasi ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') { // Pastikan targetId tidak kosong atau hanya '#'
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Implementasi Mode Gelap ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Fungsi untuk menerapkan tema
    function applyTheme(theme) {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; // Icon untuk mode gelap
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙'; // Icon untuk mode terang
        }
    }

    // Cek preferensi mode gelap dari localStorage atau sistem
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark-mode'); // Default ke dark jika sistem prefer dark
    } else {
        applyTheme('light-mode'); // Default ke light
    }

    // Event listener untuk tombol mode gelap
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            applyTheme('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // --- 3. Animasi Elemen saat Scroll (Intersection Observer API) ---
    const elementsToAnimate = document.querySelectorAll('.project-card, .project-card-hero');

    const observerOptions = {
        root: null, // Mengamati viewport
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Tambahkan kelas untuk animasi
                observer.unobserve(entry.target); // Berhenti mengamati setelah muncul
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el); // Mulai mengamati setiap elemen
    });

    // --- 4. Interaksi Navbar (perubahan background/shadow saat scroll) ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) { // Jika sudah scroll lebih dari 80px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 5. Navigasi Aktif (highlight link di navbar saat scroll) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserverOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Aktif ketika bagian tengah section terlihat
        threshold: 0 // Tidak butuh threshold, cukup mendeteksi perpotongan
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hapus kelas 'active' dari semua link
                navLinks.forEach(link => link.classList.remove('active', 'bg-text-secondary', 'text-button-text-active'));
                navLinks.forEach(link => link.classList.add('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50'));

                // Tambahkan kelas 'active' ke link yang sesuai
                const correspondingLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.remove('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50');
                    correspondingLink.classList.add('active', 'bg-text-secondary', 'text-button-text-active');
                }
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // Untuk memastikan link Work/Hero aktif di awal
    if (window.location.hash === '' || window.location.hash === '#hero') {
        document.querySelector('.nav-link[href="#hero"]').classList.add('active', 'bg-text-secondary', 'text-button-text-active');
        document.querySelector('.nav-link[href="#hero"]').classList.remove('text-button-text-inactive', 'hover:bg-dark-bg', 'hover:bg-opacity-50');
    }
});
