// Slideshow Configuration
			const slides = [
				{
					image: 'assets/images/the catalyst.png',
					link: 'releases main.html',
					title: 'Magazine'
				},
				{
					image: 'assets/images/sample2.png',
					link: 'notices.html',
					title: 'Notices & Articles'
				},
				{
					image: 'assets/images/sample1.png',
					link: 'about.html',
					title: 'About Contributors'
				},
				{
					image: 'assets/images/newsletter-bg.png',
					link: 'Recent Releases/Newest2.html',
					title: 'Latest Magazine'
				}
			];

			let currentIndex = 0;
			let slideTimer;

			// Initialize Slideshow
			function initSlideshow() {
				// set total slides counter
				const totalEl = document.getElementById('total-slides');
				if (totalEl) totalEl.textContent = slides.length;
				updateSlides();
				autoNextSlide();
			}

			// Update slide display
			function updateSlides() {
				const slides_elements = document.querySelectorAll('.slide');
				const dots = document.querySelectorAll('.slide-dot');

				slides_elements.forEach((slide, index) => {
					slide.classList.remove('active');
					slide.style.backgroundImage = `url('${slides[index].image}')`;
					if (index === currentIndex) {
						slide.classList.add('active');
					}
				});

				dots.forEach((dot, index) => {
					dot.classList.remove('active');
					if (index === currentIndex) {
						dot.classList.add('active');
					}
				});

				document.getElementById('current-slide').textContent = currentIndex + 1;

				// Update the overlay View button to point to the current slide
				const viewBtn = document.getElementById('slide-view-btn');
				if (viewBtn && slides[currentIndex]) {
					viewBtn.href = slides[currentIndex].link || '#';
					viewBtn.textContent = 'View: ' + (slides[currentIndex].title || 'Details');
					viewBtn.setAttribute('aria-label', 'View ' + (slides[currentIndex].title || 'details'));
				}
			}

			// Go to specific slide
			function currentSlide(n) {
				clearTimeout(slideTimer);
				currentIndex = n;
				updateSlides();
				autoNextSlide();
			}

			// Go to previous slide
			function prevSlide() {
				clearTimeout(slideTimer);
				currentIndex = (currentIndex - 1 + slides.length) % slides.length;
				updateSlides();
				autoNextSlide();
			}

			// Go to next slide
			function nextSlide() {
				clearTimeout(slideTimer);
				currentIndex = (currentIndex + 1) % slides.length;
				updateSlides();
				autoNextSlide();
			}

			// Go to slide and navigate to link
			function goToSlide(n, link) {
				clearTimeout(slideTimer);
				currentIndex = n;
				updateSlides();
				// Navigate to the link after a short delay for better UX
				setTimeout(function() {
					window.location.href = link;
				}, 300);
			}

			// Auto advance to next slide
			function autoNextSlide() {
				slideTimer = setTimeout(function() {
					currentIndex = (currentIndex + 1) % slides.length;
					updateSlides();
					autoNextSlide();
				}, 5000); // Change slide every 5 seconds
			}

			// Initialize on page load
			document.addEventListener('DOMContentLoaded', function() {
				initSlideshow();
			});

			// Pause on hover
			const slideshowContainer = document.querySelector('.slideshow-container');
			if (slideshowContainer) {
				slideshowContainer.addEventListener('mouseenter', function() {
					clearTimeout(slideTimer);
				});

				slideshowContainer.addEventListener('mouseleave', function() {
					autoNextSlide();
				});
			}