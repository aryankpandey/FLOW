# 🎧 focus-space

> **Enter deep work. Stay focused. Build momentum.**

`focus-space` is a minimalist productivity dashboard designed to help users achieve a state of deep focus through structured work sessions, immersive ambient audio, and intentional daily planning. By combining a customizable Pomodoro timer, layered ambient soundscapes, and a lightweight intention tracker, it creates a distraction-free environment where productivity feels natural and sustainable.

---

## 🚀 Live Demo

🌐 **Deployment URL:** [https://focus-space.netlify.app](https://focus-space.netlify.app)

---

## 📸 Preview

![focus-space Preview](assets/preview.png)

---

## ✨ Features

### ⏳ Customizable Pomodoro Canvas
Stay productive using a smooth circular countdown timer inspired by the Pomodoro Technique.
- **Tailored Sessions:** Adjustable work, short break, and long break intervals.
- **Visual Progress:** Dynamic visual countdown indicator.
- **Alerts:** Native session completion notifications.

### 🎵 Ambient Soundboard Mixer
Create your ideal focus environment by mixing multiple ambient sounds simultaneously.
- **Soundscapes:** 🌧️ Rain, ☕ Cafe Ambience, and 🎼 Lo-Fi Music.
- **Granular Control:** Independent volume tracks for real-time audio mixing.
- **Persistence:** Global playback state management.

### 📝 Daily Intentions Grid
Plan your day with a clean, distraction-free, Bento-grid inspired intentions board.
- **Task Management:** Quick add, complete, and instant deletion workflow.
- **Local Persistence:** Data automatically syncs and persists via Browser `localStorage`.

### 💡 Zen Quotes Integration
Receive motivational and reflective quotes throughout your focus sessions.
- **Dynamic Delivery:** Lightweight integration powered by the **ZenQuotes API**.

---

## 🛠️ Tech Stack

### Frontend Core
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

### APIs & Browser Tech
![Web Audio API](https://img.shields.io/badge/Web_Audio_API-333333?style=for-the-badge&logo=mdn&logoColor=white) ![Web Storage](https://img.shields.io/badge/Web_Storage_API-0052CC?style=for-the-badge&logo=google-chrome&logoColor=white)

### Deployment & CI/CD
![Netlify](https://img.shields.io/badge/netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232088FF.svg?style=for-the-badge&logo=github-actions&logoColor=white)

---

## 📂 Project Structure

```text
focus-space/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── timer.js
│   ├── soundboard.js
│   ├── intentions.js
│   └── quotes.js
│
├── assets/
│   ├── audio/
│   ├── images/
│   └── icons/
│
└── README.md
