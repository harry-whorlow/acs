const projectManagement = document.querySelector("#card3");
const kitchenCard = document.querySelector("#card2");
const bathRoom = document.querySelector("#card1");

let cards = {
    kitchen: false,
    bathroom: false,
};

projectManagement.addEventListener("click", () => {
    kitchenCard.style.right = "-600px";
    bathRoom.style.right = "-600px";
    cards.kitchen = false;
    cards.bathroom = false;
});

kitchenCard.addEventListener("click", () => {
    switch (true) {
        case cards.kitchen === false && cards.bathroom === false:
            console.log("false false");
            kitchenCard.style.right = "-10px";
            cards.kitchen = true;
            console.log(cards);
            break;
        case cards.kitchen === true && cards.bathroom === false:
            kitchenCard.style.right = "-600px";
            cards.kitchen = false;
            console.log(cards);
            break;
        case cards.kitchen === true && cards.bathroom === true:
            bathRoom.style.right = "-600px";
            cards.bathroom === false;
            console.log(cards);
            break;
    }
});

bathRoom.addEventListener("click", () => {
    if (cards.bathroom == false) {
        bathRoom.style.right = "-10px";
        kitchenCard.style.right = "-10px";
        cards.bathroom = true;
        cards.kitchen = true;
    } else {
        bathRoom.style.right = "-600px";
        cards.bathroom = false;
    }
    console.log(cards);
});
