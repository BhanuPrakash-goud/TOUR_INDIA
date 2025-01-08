// JavaScript to handle redirection based on location card click
document.querySelectorAll('.location-card').forEach(card => {
    card.addEventListener('click', () => {
        const location = card.getAttribute('data-location');
        window.location.href = `locations/${location}.html`;
    });
});
