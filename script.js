document.addEventListener('DOMContentLoaded', function() {
    const serviceContainer = document.querySelector('.service-container');
    const cards = document.querySelectorAll('.service-card');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    
    let currentPosition = 0;
    const cardWidth = 220; // Width of card + margin
    const visibleCards = 3; // Number of cards visible at once
    const maxPosition = (cards.length - visibleCards) * cardWidth;

    // Initialize position
    updatePosition();

    // Add click handlers for arrows
    leftArrow.addEventListener('click', () => {
        currentPosition = Math.min(currentPosition + cardWidth, 0);
        updatePosition();
    });

    rightArrow.addEventListener('click', () => {
        currentPosition = Math.max(currentPosition - cardWidth, -maxPosition);
        updatePosition();
    });

    function updatePosition() {
        serviceContainer.style.transform = `translateX(${currentPosition}px)`;
        
        // Update arrow visibility
        leftArrow.style.opacity = currentPosition < 0 ? '1' : '0.5';
        rightArrow.style.opacity = currentPosition > -maxPosition ? '1' : '0.5';
    }
}); 