document.addEventListener('DOMContentLoaded', function () {

    // 1. Fungsionalitas untuk mengubah latar belakang navbar saat scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Fungsionalitas untuk mengisi data pada modal
    const detailModal = document.getElementById('detailModal');
    if (detailModal) {
        detailModal.addEventListener('show.bs.modal', function (event) {
            // Tombol atau kartu yang memicu modal
            const triggerElement = event.relatedTarget;

            // Ekstrak informasi dari atribut data-*
            const title = triggerElement.getAttribute('data-title');
            const image = triggerElement.getAttribute('data-image');
            const description = triggerElement.getAttribute('data-description');

            // Perbarui konten modal
            const modalTitle = detailModal.querySelector('.modal-title');
            const modalImage = detailModal.querySelector('#modalImage');
            const modalDescription = detailModal.querySelector('#modalDescription');

            modalTitle.textContent = title;
            modalImage.src = image;
            modalDescription.textContent = description;
        });
    }

    // 3. Fungsionalitas untuk smooth scroll pada link navigasi
    document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});