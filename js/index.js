document.addEventListener('DOMContentLoaded', () => {

    let cardArray = [];
    let addCard = document.querySelector('.add-card');
    let overlay = document.querySelector('.overlay');
    let closeMenu = document.querySelector('.close-menu');
    let frontCard = document.querySelector('#front-card');
    let backCard = document.querySelector('#back-card');
    let cardForm = document.querySelector('.new-card-form');
    let cardContainer = document.querySelector('.card-container');
    let userFrontCard;
    let userBackCard;

    addCard.addEventListener('click', () => {
       overlay.style.display = "flex";
       closeMenu.addEventListener('click', () => {
           overlay.style.display = "none";
       });
    });

    cardForm.addEventListener('submit', (event) => {
        event.preventDefault(); //use this because we aren't using a server
        //console.log("it works!");
        let card = {
            front: frontCard.value,
            back: backCard.value
        }
        cardArray.push(card);
        frontCard.value = "";
        backCard.value = "";
        // console.log(cardArray);
        displayCards();
    });

    function displayCards() {
        cardContainer.innerHTML = "";
        cardArray.forEach((card) => {
            let listItem = document.createElement('li');

            var card = document.createElement('div');
            card.classList.add('card');

            let frontCardDiv = document.createElement('div');
            frontCardDiv.classList.add('front-card');
            let cardFrontTitle = document.createElement('p')
            cardFrontTitle.innerHTML = card.front
            frontCardDiv.appendChild(cardFrontTitle);
            card.appendChild(frontCardDiv);

            let backCardDiv = document.createElement('div');
            backCardDiv.classList.

            listItem.appendChild(cardFrontTitle);
            let cardBackAnswer = document.createElement('p');
            cardBackAnswer.innerHTML = card.back;
            listItem.appendChild(card);
            cardContainer.appendChild(listItem);
        });

    }

});