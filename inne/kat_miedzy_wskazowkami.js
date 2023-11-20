document.addEventListener("DOMContentLoaded", function () {
    const hoursInput = document.getElementById("hours_range");
    const minutesInput = document.getElementById("minutes_range");
    const hoursOutput = document.getElementById("hours_output");
    const minutesOutput = document.getElementById("minutes_output");
    const hoursHand = document.getElementById("hours_hand");
    const minutesHand = document.getElementById("minutes_hand");
    const angleOutput = document.getElementById("angle");

    function updateClock() {
        const hours = parseInt(hoursInput.value);
        const minutes = parseInt(minutesInput.value);

        const hoursDegrees = hours * 30;
        const minutesDegrees = minutes * 12/2;

        hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
        minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const angle = Math.abs(hoursDegrees - minutesDegrees);
        angleOutput.textContent = `${angle.toFixed(2)}°`;
    }

    hoursInput.addEventListener("input", function () {
        hoursOutput.textContent = hoursInput.value;
        updateClock();
    });

    minutesInput.addEventListener("input", function () {
        minutesOutput.textContent = minutesInput.value;
        updateClock();
    });


    updateClock();
});
