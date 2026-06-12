# 🎧 FocusSpace

> **Enter deep work. Stay focused. Build momentum.**[span_0](start_span)[span_0](end_span)

`focus-space` is a minimalist productivity dashboard designed to help users achieve a state of deep focus through structured work sessions, immersive ambient audio, and intentional daily planning[span_1](start_span)[span_1](end_span). By combining a customizable Pomodoro timer, layered ambient soundscapes, and a lightweight intention tracker, it creates a distraction-free environment where productivity feels natural and sustainable[span_2](start_span)[span_2](end_span).

---

## 🚀 Live Demo

🌐 **Deployment URL:** [https://focus-space.netlify.app](https://focus-space.netlify.app)[span_3](start_span)[span_3](end_span)

---

## 📸 Preview

![focus-space Preview](assets/preview.png)[span_4](start_span)[span_4](end_span)

---

## ✨ Features

### ⏳ Customizable Pomodoro Canvas
Stay productive using a smooth circular countdown timer inspired by the Pomodoro Technique[span_5](start_span)[span_5](end_span).
- **Tailored Sessions:** Adjustable work, short break, and long break intervals[span_6](start_span)[span_6](end_span).
- **Visual Progress:** Dynamic visual countdown indicator[span_7](start_span)[span_7](end_span).
- **Alerts:** Native session completion notifications[span_8](start_span)[span_8](end_span).

### 🎵 Ambient Soundboard Mixer
Create your ideal focus environment by mixing multiple ambient sounds simultaneously[span_9](start_span)[span_9](end_span).
- **Soundscapes:** 🌧️ Rain, ☕ Cafe Ambience, and 🎼 Lo-Fi Music[span_10](start_span)[span_10](end_span).
- **Granular Control:** Independent volume tracks for real-time audio mixing[span_11](start_span)[span_11](end_span).
- **Persistence:** Global playback state management[span_12](start_span)[span_12](end_span).

### 📝 Daily Intentions Grid
Plan your day with a clean, distraction-free, Bento-grid inspired intentions board[span_13](start_span)[span_13](end_span).
- **Task Management:** Quick add, complete, and instant deletion workflow[span_14](start_span)[span_14](end_span).
- **Local Persistence:** Data automatically syncs and persists via Browser `localStorage`[span_15](start_span)[span_15](end_span).

### 💡 Zen Quotes Integration
Receive motivational and reflective quotes throughout your focus sessions[span_16](start_span)[span_16](end_span).
- **Dynamic Delivery:** Lightweight integration powered by the **ZenQuotes API**[span_17](start_span)[span_17](end_span).

---

## 🛠️ Tech Stack

### Frontend Core
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)[span_18](start_span)[span_18](end_span)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)[span_19](start_span)[span_19](end_span)
- ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)[span_20](start_span)[span_20](end_span)

### APIs & Browser Tech
- ![Web Audio API](https://img.shields.io/badge/Web_Audio_API-333333?style=for-the-badge&logo=mdn&logoColor=white)[span_21](start_span)[span_21](end_span)
- ![Web Storage](https://img.shields.io/badge/Web_Storage_API-0052CC?style=for-the-badge&logo=google-chrome&logoColor=white)[span_22](start_span)[span_22](end_span)

### Deployment & CI/CD
- ![Netlify](https://img.shields.io/badge/netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)[span_23](start_span)[span_23](end_span)
- ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232088FF.svg?style=for-the-badge&logo=github-actions&logoColor=white)[span_24](start_span)[span_24](end_span)

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
```[span_25](start_span)[span_25](end_span)

---

## ⚙️ Installation & Local Development

1. **Clone the repository:**
```bash
   git clone [https://github.com/yourusername/focus-space.git](https://github.com/yourusername/focus-space.git)
   ```[span_26](start_span)[span_26](end_span)

2. **Navigate to the project folder:**
```bash
   cd focus-space
   ```[span_27](start_span)[span_27](end_span)

3. **Run locally:**
* **Option 1:** Open `index.html` directly in your browser[span_28](start_span)[span_28](end_span).
* **Option 2:** Serve it via a local development server like VS Code Live Server for an optimal workflow[span_29](start_span)[span_29](end_span).

---

## 🎯 How It Works

1. **Configure:** Set your preferred Pomodoro durations on the dashboard[span_30](start_span)[span_30](end_span).
2. **Focus:** Start a work interval session[span_31](start_span)[span_31](end_span).
3. **Immerse:** Mix soundscape tracks simultaneously to tune out peripheral noise[span_32](start_span)[span_32](end_span).
4. **Plan:** Brainstorm and map out your tasks into the Daily Intentions grid[span_33](start_span)[span_33](end_span).
5. **Reflect:** Absorb the minimalist Zen quotes generated during intervals to reset[span_34](start_span)[span_34](end_span).

---

## 🌟 Future Roadmap

- [ ] Dark / Light adaptive theme switching[span_35](start_span)[span_35](end_span)
- [ ] Comprehensive statistics & focus analytics dashboard[span_36](start_span)[span_36](end_span)
- [ ] Focus streak tracking metrics[span_37](start_span)[span_37](end_span)
- [ ] Spotify API audio streaming support[span_38](start_span)[span_38](end_span)
- [ ] Custom ambient sound file uploads[span_39](start_span)[span_39](end_span)
- [ ] Progressive Web App (PWA) support for offline capabilities[span_40](start_span)[span_40](end_span)

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**[span_41](start_span)[span_41](end_span).

1. Fork the Project[span_42](start_span)[span_42](end_span)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)[span_43](start_span)[span_43](end_span)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)[span_44](start_span)[span_44](end_span)
4. Push to the Branch (`git push origin feature/AmazingFeature`)[span_45](start_span)[span_45](end_span)
5. Open a Pull Request[span_46](start_span)[span_46](end_span)

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more details[span_47](start_span)[span_47](end_span).

---

## 🙌 Acknowledgements

* [ZenQuotes API](https://zenquotes.io/)[span_48](start_span)[span_48](end_span)
* [The Pomodoro Technique®](https://francescocirillo.com/pages/pomodoro-technique)[span_49](start_span)[span_49](end_span)
* Built for creators, developers, students, and deep thinkers.
