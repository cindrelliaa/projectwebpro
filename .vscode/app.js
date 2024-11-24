const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    // Function to update the slide position
    function updateSlidePosition() {
      const slideWidth = slideImages[0].clientWidth;
      slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    // Go to the next slide
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideImages.length;
      updateSlidePosition();
    });

    // Go to the previous slide
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
      updateSlidePosition();
    });

    // Auto slide
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slideImages.length;
      updateSlidePosition();
    }, 3000);

    // Set initial position
    updateSlidePosition();