const buttons = document.getElementsByClassName("calcutale-button");

const calculatedArea = document.getElementById("calculated-area");


for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        const cardName = event.target.parentNode.parentNode.childNodes[3].innerText;

        const firstInputValue = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[0].value;
        const firstInputValueNumber = parseFloat(firstInputValue);

        const secondInputValue = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[4].value;
        const secondInputValueNumber = parseFloat(secondInputValue);

        const li = document.createElement("li");
        li.classList.add("calculated-number");
        const count = calculatedArea.childElementCount;

        function setArea(name, area) {
            li.innerHTML = `<p>${count + 1}. ${name} ${area} cm<sup>2</sup></p> 
            <button type="button" class="convert-to-meter-button">meter<sup>2</sup></button>`;
            calculatedArea.appendChild(li);
        }

        if (cardName === "Triangle" || cardName === "Rhombus" || cardName === "Pentagon") {
            const areaOfIndicatedShape = .5 * firstInputValueNumber * secondInputValueNumber;
            const areaOfIndicatedShapeDecimal = areaOfIndicatedShape.toFixed(2);
            setArea(cardName, areaOfIndicatedShapeDecimal);

        } else if (cardName === "Ellipse") {
            const areaOfIndicatedShape = 3.1416 * firstInputValueNumber * secondInputValueNumber;
            const areaOfIndicatedShapeDecimal = areaOfIndicatedShape.toFixed(2);
            setArea(cardName, areaOfIndicatedShapeDecimal);
        } else {
            const areaOfIndicatedShape = firstInputValueNumber * secondInputValueNumber;
            const areaOfIndicatedShapeDecimal = areaOfIndicatedShape.toFixed(2);
            setArea(cardName, areaOfIndicatedShapeDecimal);

        }
    })
}

document.getElementById("blog-button").addEventListener("click", function () {
    location.href = "blog.html";
})