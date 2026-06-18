document.addEventListener('DOMContentLoaded', () => {
    const intentionInput = document.getElementById('intention');

    if (intentionInput) {
        // Load existing saved intention
        const savedIntention = localStorage.getItem('flow-daily-intention');
        if (savedIntention) {
            intentionInput.value = savedIntention;
            intentionInput.classList.add('border-primary');
        }

        intentionInput.addEventListener('focus', () => {
            intentionInput.classList.add('border-primary');
            intentionInput.classList.remove('border-transparent');
        });

        intentionInput.addEventListener('blur', () => {
            if (!intentionInput.value.trim()) {
                intentionInput.classList.remove('border-primary');
                intentionInput.classList.add('border-transparent');
                localStorage.removeItem('flow-daily-intention');
            } else {
                localStorage.setItem('flow-daily-intention', intentionInput.value.trim());
            }
        });

        // Save on hitting Enter key
        intentionInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                intentionInput.blur();
            }
        });
    }
});