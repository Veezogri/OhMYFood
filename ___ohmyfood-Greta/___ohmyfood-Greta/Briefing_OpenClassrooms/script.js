document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.card__like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('filled');
        });
    });
});
