document.addEventListener('DOMContentLoaded', () => {
    // Analytics state initialization schema
    let analyticsData = JSON.parse(localStorage.getItem('flow-analytics')) || {
        totalSessions: 0,
        focusHours: 0.0,
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: null,
        todaySessions: 0
    };

    let timerInterval = null;
    let totalDuration = 25 * 60; 
    let timeRemaining = totalDuration;
    let isRunning = false;
    let currentMode = 'focus'; // focus || break

    // UI elements mappings
    const display = document.getElementById('timer-display');
    const modeLabel = document.getElementById('timer-mode-label');
    const progressBar = document.getElementById('progress-bar');
    const startBtn = document.getElementById('start-btn');
    const startBtnText = document.getElementById('start-btn-text');
    const resetBtn = document.getElementById('reset-btn');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const streakBadge = document.getElementById('streak-badge-count');

    // Stats View elements
    const totalSessionsEl = document.getElementById('stat-total-sessions');
    const focusHoursEl = document.getElementById('stat-focus-hours');
    const currentStreakEl = document.getElementById('stat-current-streak');
    const longestStreakEl = document.getElementById('stat-longest-streak');
    const todaySessionsEl = document.getElementById('stat-today-sessions');

    function updateAnalyticsDisplay() {
        if(totalSessionsEl) totalSessionsEl.innerText = analyticsData.totalSessions;
        if(focusHoursEl) focusHoursEl.innerText = analyticsData.focusHours.toFixed(1);
        if(currentStreakEl) currentStreakEl.innerText = `${analyticsData.currentStreak} Days`;
        if(longestStreakEl) longestStreakEl.innerText = `${analyticsData.longestStreak} Days`;
        if(todaySessionsEl) todaySessionsEl.innerText = analyticsData.todaySessions;
        if(streakBadge) streakBadge.innerText = analyticsData.currentStreak;
    }

    function checkStreakValidity() {
        const todayStr = new Date().toDateString();
        if (analyticsData.lastActiveDate) {
            const lastDate = new Date(analyticsData.lastActiveDate);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastDate.toDateString() !== todayStr && lastDate.toDateString() !== yesterday.toDateString()) {
                analyticsData.currentStreak = 0; // Streak broken over missing days
            }
            if (lastDate.toDateString() !== todayStr) {
                analyticsData.todaySessions = 0; // Reset counter dynamic for new days
            }
        }
        updateAnalyticsDisplay();
    }

    function updateTimerUI() {
        const mins = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
        const secs = (timeRemaining % 60).toString().padStart(2, '0');
        display.innerText = `${mins}:${secs}`;

        // Circumference offset math calculation (880 values mapping)
        const progressFraction = timeRemaining / totalDuration;
        const offset = 880 - (progressFraction * 880);
        progressBar.style.strokeDashoffset = offset;
    }

    function handleTimerCompletion() {
        clearInterval(timerInterval);
        isRunning = false;
        startBtnText.innerText = "Start Flow";
        startBtn.querySelector('.material-symbols-outlined').innerText = 'play_arrow';

        if (Notification.permission === "granted") {
            new Notification(currentMode === 'focus' ? "Session Completed! Take a break." : "Break Ended! Time to focus.");
        }

        if (currentMode === 'focus') {
            const todayStr = new Date().toDateString();
            analyticsData.totalSessions += 1;
            analyticsData.focusHours += (totalDuration / 3600);
            analyticsData.todaySessions += 1;

            if (analyticsData.lastActiveDate !== todayStr) {
                analyticsData.currentStreak += 1;
                if (analyticsData.currentStreak > analyticsData.longestStreak) {
                    analyticsData.longestStreak = analyticsData.currentStreak;
                }
            }
            analyticsData.lastActiveDate = todayStr;
            localStorage.setItem('flow-analytics', JSON.stringify(analyticsData));
            updateAnalyticsDisplay();
        }

        // Auto toggle switch next logical block state 
        currentMode = currentMode === 'focus' ? 'break' : 'focus';
        modeLabel.innerText = currentMode === 'focus' ? "Focus Session" : "Rest Break";
        timeRemaining = (currentMode === 'focus' ? 25 : 5) * 60;
        totalDuration = timeRemaining;
        updateTimerUI();
    }

    function toggleTimer() {
        if (isRunning) {
            clearInterval(timerInterval);
            startBtnText.innerText = "Resume Flow";
            startBtn.querySelector('.material-symbols-outlined').innerText = 'play_arrow';
        } else {
            if (Notification.permission === "default") {
                Notification.requestPermission();
            }
            timerInterval = setInterval(() => {
                timeRemaining--;
                updateTimerUI();
                if (timeRemaining <= 0) {
                    handleTimerCompletion();
                }
            }, 1000);
            startBtnText.innerText = "Pause Flow";
            startBtn.querySelector('.material-symbols-outlined').innerText = 'pause';
        }
        isRunning = !isRunning;
    }

    // Controls Configuration mappings
    startBtn.addEventListener('click', toggleTimer);

    resetBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        isRunning = false;
        startBtnText.innerText = "Start Flow";
        startBtn.querySelector('.material-symbols-outlined').innerText = 'play_arrow';
        timeRemaining = totalDuration;
        updateTimerUI();
    });

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(timerInterval);
            isRunning = false;
            startBtnText.innerText = "Start Flow";
            startBtn.querySelector('.material-symbols-outlined').innerText = 'play_arrow';
            
            const minutes = parseInt(btn.getAttribute('data-duration'));
            currentMode = btn.getAttribute('data-type');
            
            modeLabel.innerText = currentMode === 'focus' ? "Focus Session" : "Rest Break";
            totalDuration = minutes * 60;
            timeRemaining = totalDuration;

            presetBtns.forEach(b => b.classList.remove('bg-primary/20', 'text-primary'));
            btn.classList.add('bg-primary/20', 'text-primary');

            updateTimerUI();
        });
    });

    document.getElementById('custom-timer-btn').addEventListener('click', () => {
        const customMins = prompt("Enter duration in minutes:", "45");
        if(customMins && !isNaN(customMins)) {
            clearInterval(timerInterval);
            isRunning = false;
            startBtnText.innerText = "Start Flow";
            currentMode = 'focus';
            modeLabel.innerText = "Focus Session";
            totalDuration = parseInt(customMins) * 60;
            timeRemaining = totalDuration;
            updateTimerUI();
        }
    });

    // Run Startup Initializations Checks
    checkStreakValidity();
    updateTimerUI();
    // Pre-activate first preset visualization context state wrapper styling
    if(presetBtns[0]) presetBtns[0].classList.add('bg-primary/20', 'text-primary');
});