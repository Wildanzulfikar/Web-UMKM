const filterButtons = document.querySelectorAll('.filter-button, .filter-button-ikan, .filter-button-ayam, .filter-button-rendang');
const productCards = document.querySelectorAll('.product-card');

const filterProducts = (category) => {
    productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');
        filterProducts(category);
    });
});

window.addEventListener('DOMContentLoaded', () => filterProducts('all'));


