// script.js
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.style.backgroundColor = 'purple'; // Untuk memastikan JS bisa mengakses tombol
        darkModeToggle.addEventListener('click', () => {
            alert('Tombol diklik!'); // Munculkan alert saat tombol diklik
        });
    } else {
        console.error('Elemen darkModeToggle tidak ditemukan!');
    }
    console.log('Script.js berhasil dimuat!'); // Cek di konsol
});
