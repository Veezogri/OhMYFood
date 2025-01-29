    const likeButtons = document.querySelectorAll('.card__like');

    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('fas');
            button.classList.toggle('filled');
            

            

            
        });
    });




