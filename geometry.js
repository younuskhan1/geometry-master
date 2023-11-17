const buttons = document.getElementsByClassName("calcutale-button");
const cards = document.getElementsByClassName("card");
const calculatedArea = document.getElementById("calculated-area");

for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        const cardName = event.target.parentNode.parentNode.childNodes[3].innerText;
        const firstInputValue = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[0].value;
        const firstInputValueNumber = parseFloat(firstInputValue);
        const secondInputValue = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[4].value;
        const secondInputValueNumber = parseFloat(secondInputValue);
        if (firstInputValueNumber < 0 || secondInputValueNumber < 0) {
            alert("Please provide me a positive numeric value.")
        } else if (isNaN(firstInputValueNumber) || isNaN(secondInputValueNumber)) {
            alert("Do not give me text or empty text ! Please provide me a positive numeric value.")
        } else {
            const li = document.createElement("li");
            li.classList.add("calculated-number");
            const count = calculatedArea.childElementCount;
            //  reuseable common function is used in different places...

            function setArea(name, area) {
                li.innerHTML = `<p>${count + 1}. <span>${name}</span> <span>${area}</span> cm<sup>2</sup></p> 
                <button type="button" class="convert-to-meter-button">meter<sup>2</sup></button>`;
                calculatedArea.appendChild(li);

                const meterButtons = document.getElementsByClassName("convert-to-meter-button");

                for (let meterButton of meterButtons) {

                    meterButton.addEventListener("click", function (event) {
                        event.stopImmediatePropagation();
                        const name = event.target.parentNode.childNodes[0].childNodes[1].innerText;
                        const centimeter = event.target.parentNode.childNodes[0].childNodes[3].innerText;
                        // console.log(name, centimeter);
                        const centimeterInNumber = parseFloat(centimeter);
                        const meter = centimeterInNumber / 100;
                        const meterDecimal = meter.toFixed(2);
                        // It does not need to append the li to calculatedArea newly. Just update the data
                        // with new value.
                        li.innerHTML = `<p>${count + 1}. <span>${name}</span> <span>${meterDecimal}</span> m<sup>2</sup></p> 
                        <button type="button" class="meter-button">cm<sup>2</sup></button>`;

                        const centimeterButtons = document.getElementsByClassName("meter-button");
                        for (let centiButton of centimeterButtons) {
                            centiButton.addEventListener("click", function (event) {
                                event.stopImmediatePropagation();
                                const name = event.target.parentNode.childNodes[0].childNodes[1].innerText;
                                const centiMeter = event.target.parentNode.childNodes[0].childNodes[3].innerText;
                                const centimeterInNumber = parseFloat(centiMeter);
                                // console.log(name, centiMeter);
                                const meter = centimeterInNumber * 100;
                                const centimeterDeci = meter.toFixed(2);

                                li.innerHTML = `<p>${count + 1}. <span>${name}</span> <span>${centimeterDeci}</span> cm<sup>2</sup></p> 
                                <button type="button" class="centimeter-button">meter<sup>2</sup></button>`;
                            })
                        }
                    })
                }
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
        }
    })
}

for (let card of cards) {
    card.addEventListener("mouseenter", function (event) {

        // I caught each whole card by using toElement property of event object.
        // you will not be able to get the whole card by using target property of event 
        // object. console.log(event.target); using this you can get card's image, 
        // text, button, otherthings separately but I need the card wholly for that 
        // reason I used toElement property of event object.

        // console.log(event);
        const targetCard = event.toElement;
        targetCard.style.backgroundColor = getRandomColor();

        function getRandomNumber(limitValue) {
            let randomNumber = Math.random();
            randomNumber = randomNumber * limitValue;
            randomNumber = Math.floor(randomNumber);
            return randomNumber;
        }
        function getRandomColor() {
            const limitValue = 256;
            let red = getRandomNumber(limitValue);
            let green = getRandomNumber(limitValue);
            let blue = getRandomNumber(limitValue);
            return `rgb( ${red}, ${green}, ${blue})`;
        }
    })
}

document.getElementById("blog-button").addEventListener("click", function () {
    location.href = "blog.html";
})