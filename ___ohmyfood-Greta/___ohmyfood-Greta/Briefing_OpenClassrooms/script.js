    const likeButtons = document.querySelectorAll('.card__like');

    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('fas');
            button.classList.toggle('filled');
            

            

            
        });
    });

const titresection = document.querySelectorAll('.TitreSection');


titresection.forEach(hover => {
    hover.addEventListener('mouseover', () => {
        //alert("Survol détecté sur", hover.textContent);
        hover.classList.add('ChangeColor');
        console.log("Classe ajoutée :", hover.classList.contains('ChangeColor'), hover);
        
    });

    hover.addEventListener('mouseleave', () => {
        hover.classList.remove('ChangeColor');
        
    });

});











