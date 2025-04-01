const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;
let previousIndex = 0;

function showSlide(index) {
    slides[previousIndex].classList.remove('active');
    slides[previousIndex].classList.add('slide-exit');
    dots[previousIndex].classList.remove('active');

    slides[index].classList.remove('slide-exit');
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    previousIndex = index;
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Set the initial active tab and content on load
    const initialTab = document.querySelector('.tab');
    initialTab.classList.add('active');
    
    const initialContent = document.getElementById('web');
    initialContent.classList.add('active');
    initialContent.classList.add('fade-in'); // Add fade-in animation to initial content
});

function showFeature(feature) {
    const tabs = document.querySelectorAll('.tab');
    const items = document.querySelectorAll('.feature-item');
    
    // Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add active class to the clicked tab
    event.currentTarget.classList.add('active');

    // Loop through all items and add fade-out animation before hiding them
    items.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active', 'fade-in');
            item.classList.add('fade-out');
            setTimeout(() => item.classList.remove('fade-out'), 600); // Remove fade-out class after animation completes
        }
    });

    // Show the selected feature item with fade-in animation
    const selectedFeature = document.getElementById(feature);
    if (selectedFeature) {
        selectedFeature.classList.add('active', 'fade-in');
    }
}

const images = document.querySelectorAll('.quiz-card img');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');

// Make sure the modal is hidden initially
modal.style.display = 'none';

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


// JavaScript for Back to Top button
const bttButton = document.querySelector('.btt-button');

window.addEventListener('scroll', () => {
  const aboutSection = document.getElementById('about');
  const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (aboutSectionPosition <= viewportHeight / 2) {
    bttButton.classList.add('show');
  } else {
    bttButton.classList.remove('show');
  }
});

bttButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
