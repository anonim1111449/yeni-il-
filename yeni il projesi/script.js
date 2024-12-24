const countdown = document.getElementById("countdown");
const newYearMessage = document.getElementById("new-year-message");

function updateCountdown() {
    const now = new Date();
    const newYear = new Date("January 1, 2025 00:00:00");
    const timeLeft = newYear - now;

    if (timeLeft <= 0) {
        countdown.style.display = "none";
        newYearMessage.style.display = "block";
        startSnowfall();
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

function startSnowfall() {
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.textContent = "❄";
        snowflake.style.left = Math.random() * 100+ "vw";
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        document.body.appendChild(snowflake);
    }
}

setInterval(updateCountdown, 1000);
