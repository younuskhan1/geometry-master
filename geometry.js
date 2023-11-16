const buttons = document.getElementsByClassName("calcutale-button");


for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        const cardName = event.target.parentNode.parentNode.childNodes[3].innerText;

        const firstInputValue = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[0].value;
        const firstInputValueNumber = parseFloat(firstInputValue);

        const secondInputValue = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[4].value;
        const secondInputValueNumber = parseFloat(secondInputValue);
        if (cardName === "Triangle" || cardName === "Rhombus" || cardName === "Pentagon") {
            const areaOfIndicatedShape = .5 * firstInputValueNumber * secondInputValueNumber;
            console.log(areaOfIndicatedShape);
        } else {
            const areaOfIndicatedShape = firstInputValueNumber * secondInputValueNumber;
            console.log(areaOfIndicatedShape);
        }

    })
}