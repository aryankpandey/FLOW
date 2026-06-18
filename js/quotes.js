const FLOW_QUOTES = [
    "Small progress compounds into remarkable results.",
    "Focus is a superpower in a distracted world.",
    "Discipline is choosing what you want most over what you want now.",
    "Deep work is the ability to focus without distraction on a cognitively demanding task.",
    "Simplicity is the ultimate sophistication of production.",
    "Be mapless, but run completely focused on the current mile."
];

function initQuotes() {
    const quoteDisplay = document.getElementById('quote-display');
    if (quoteDisplay) {
        // Rotate random index on load
        const randomIndex = Math.floor(Math.random() * FLOW_QUOTES.length);
        quoteDisplay.innerText = `"${FLOW_QUOTES[randomIndex]}"`;
    }
}

document.addEventListener('DOMContentLoaded', initQuotes);