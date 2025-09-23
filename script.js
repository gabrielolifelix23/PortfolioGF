document.addEventListener("DOMContentLoaded", () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Beats Solo 4 - Apple',
            category: 'Criação de Imagens',
            image: 'assets/FONEDEOUVIDOAPPLE.jpg',
            description: 'Design promocional para fones de ouvido Beats Solo 4 da Apple com estilo moderno e minimalista.',
            gallery: ['assets/FONEDEOUVIDOAPPLE.jpg']
        },
        {
            id: 2,
            title: 'Burger das Galáxias',
            category: 'Criação de Imagens',
            image: 'assets/HAMBURGUERDASGALÁXIAS.jpg',
            description: 'Conceito criativo futurista para hamburguer com tema espacial e cores vibrantes.',
            gallery: ['assets/HAMBURGUERDASGALÁXIAS.jpg']
        },
        {
            id: 3,
            title: 'Café 3 Corações',
            category: 'Criação de Imagens',
            image: 'assets/CAFÉCASARIO.jpg',
            description: 'Fotografia de produto profissional para embalagem de café extraforte.',
            gallery: ['assets/CAFÉCASARIO.jpg']
        },
        {
            id: 4,
            title: 'King Burger',
            category: 'Criação de Imagens',
            image: 'assets/king.jpg',
            description: 'Design promocional limpo e apetitoso para King Burger com oferta especial.',
            gallery: ['assets/king.jpg']
        },
        {
            id: 5,
            title: 'Arte Conceitual Sharpe',
            category: 'Criação de Imagens',
            image: 'assets/Prancheta11.jpg',
            description: 'Arte conceitual experimental com cores vibrantes e elementos abstratos.',
            gallery: ['assets/Prancheta11.jpg']
        },
        {
            id: 6,
            title: 'Virtus Artigos Católicos - Identidade Visual Completa',
            category: 'Identidade Visual',
            image: 'assets/Prancheta4.png',
            description: 'Criação de identidade visual completa para Virtus Artigos Católicos, incluindo cartão de visita, boné, carimbo, sacola, caixas, sacola de papel, placa e painel publicitário.',
            gallery: [
                'assets/Prancheta4.png',
                'assets/Prancheta2.jpg',
                'assets/Prancheta6.jpg',
                'assets/Prancheta7.jpg',
                'assets/Prancheta5.jpg',
                'assets/Prancheta8.jpg',
                'assets/Prancheta10.jpg',
                'assets/PAINELVIRTUS.jpg'
            ]
        },
        {
            id: 7,
            title: 'The Line Sports - Identidade Visual Completa',
            category: 'Identidade Visual',
            image: 'assets/THE-LINE-SPORTS_01.jpg',
            description: 'Criação de identidade visual completa para The Line Sports, incluindo sacola, tag, embalagem e materiais promocionais.',
            gallery: [
                'assets/THE-LINE-SPORTS_01.jpg',
                'assets/THE-LINE-SPORTS_03.jpg',
                'assets/THE-LINE-SPORTS_05.jpg'
            ]
        },
        {
            id: 8,
            title: 'Campanha MimoVet - Primavera',
            category: 'Criação de Imagens',
            image: 'assets/Prancheta6.jpg',
            description: 'Campanha promocional para MimoVet com tema de primavera e foco em animais de estimação.',
            gallery: ['assets/Prancheta6.jpg']
        },
        {
            id: 9,
            title: 'Academia Power Fitness - Mensalidade',
            category: 'Criação de Imagens',
            image: 'assets/Prancheta9.png',
            description: 'Design promocional para academia Power Fitness com oferta especial de mensalidade.',
            gallery: ['assets/Prancheta9.png']
        },
        {
            id: 10,
            title: 'Academia Power Fitness - Transforme seu corpo',
            category: 'Criação de Imagens',
            image: 'assets/Prancheta1.jpg',
            description: 'Design promocional para academia Power Fitness com foco em transformação corporal.',
            gallery: ['assets/Prancheta1.jpg']
        }
    ];

    let currentGallery = [];
    let currentImageIndex = 0;

    // Render portfolio items
    function renderPortfolio(items) {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        portfolioGrid.innerHTML = '';

        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item fade-in';
            
            const galleryIndicator = item.gallery && item.gallery.length > 1 
                ? `<div class="gallery-indicator">${item.gallery.length} imagens</div>` 
                : '';
            
            portfolioItem.innerHTML = `
                <div class="portfolio-image-container">
                    <img src="${item.image}" alt="${item.title}" onclick="openGallery(${item.id})" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE3NSIgeT0iMTI1IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+SW1hZ2VtIG7Do28gZW5jb250cmFkYTwvdGV4dD4KPC9zdmc+'" />
                    ${galleryIndicator}
                </div>
                <div class="portfolio-item-content">
                    <div class="category">${item.category}</div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    // Open gallery with navigation
    window.openGallery = function(itemId) {
        const item = portfolioItems.find(p => p.id === itemId);
        if (!item) return;

        currentGallery = item.gallery || [item.image];
        currentImageIndex = 0;
        
        showGalleryImage();
        
        const modal = document.getElementById('imageModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function showGalleryImage() {
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const imageCounter = document.getElementById('imageCounter');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        const item = portfolioItems.find(p => p.gallery && p.gallery.includes(currentGallery[currentImageIndex]));
        
        // Preload the image to ensure it loads properly
        const img = new Image();
        img.onload = function() {
            modalImage.src = currentGallery[currentImageIndex];
            if (item) {
                modalTitle.textContent = item.title;
                modalDescription.textContent = item.description;
            }
            
            // Update counter and navigation buttons
            if (imageCounter) {
                imageCounter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
            }
            
            if (prevBtn) {
                prevBtn.style.display = currentGallery.length > 1 ? 'flex' : 'none';
                prevBtn.disabled = currentImageIndex === 0;
            }
            
            if (nextBtn) {
                nextBtn.style.display = currentGallery.length > 1 ? 'flex' : 'none';
                nextBtn.disabled = currentImageIndex === currentGallery.length - 1;
            }
        };
        img.src = currentGallery[currentImageIndex];
    }

    // Navigation functions
    window.prevImage = function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showGalleryImage();
        }
    }

    window.nextImage = function() {
        if (currentImageIndex < currentGallery.length - 1) {
            currentImageIndex++;
            showGalleryImage();
        }
    }

    window.closeModal = function() {
        const modal = document.getElementById('imageModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentGallery = [];
        currentImageIndex = 0;
    }

    // Close modal when clicking outside the image
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            let filteredItems = portfolioItems;

            if (filter !== 'all') {
                filteredItems = portfolioItems.filter(item => 
                    item.category.toLowerCase().replace(/\s+/g, '-') === filter
                );
            }

            renderPortfolio(filteredItems);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            contactForm.reset();
        });
    }

    // Initial render
    renderPortfolio(portfolioItems);

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Lazy loading for images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
});
