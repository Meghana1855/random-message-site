const messages = [
    "Happy Day 😊",
    "Good Day 🌞",
    "Help Ever 🤝",
    "Serve All ❤️",
    "Stay Positive 🌸",
    "Believe in Yourself 💪",
    "Keep Smiling 😊",
    "Never Give Up 🚀",
    "Be Kind to Everyone 🌍",
    "Dream Big ⭐"
];

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerHTML = messages[randomIndex];
}

// Display a random message whenever the page loads or refreshes
window.onload = showRandomMessage;