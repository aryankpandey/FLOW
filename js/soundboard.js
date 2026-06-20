// Web Audio API Synthesized Ambient Sound generator for complete portability without missing local assets
class SoundscapeEngine {
    constructor() {
        this.ctx = null;
        this.players = {};
        this.soundsConfig = [
            {
                id: 'rain',
                name: 'Calming Rain',
                icon: 'water_drop',
                file: 'assets\audio\calming-rain.mp3'
            },
            {
                id: 'thunder',
                name: 'Rain + Thunder',
                icon: 'thunderstorm',
                file: 'assets\audio\rain-thunder.mp3'
            },
            {
                id: 'bells',
                name: 'Tibetan Bells',
                icon: 'self_improvement',
                file: 'assets\audio\tibetan-bells.mp3'
            },
            {
                id: 'melody',
                name: 'Soothing Melody',
                icon: 'music_note',
                file: 'assets\audio\soothing-melody.mp3'
            },
            {
                id: 'birds',
                name: 'Birds in Forest',
                icon: 'nature',
                file: 'assets\audio\forest-birds.mp3'
            },
            {
                id: 'waves',
                name: 'Ocean Waves',
                icon: 'water',
                file: 'assets\audio\ocean-waves.mp3'
            },
            {
                id: 'sleep',
                name: 'Sleep Sounds',
                icon: 'bed',
                file: 'assets\audio\sleep-sounds.mp3'
            },
            {
                id: 'peaceful',
                name: 'Peaceful Ambience',
                icon: 'spa',
                file: 'assets\audio\peaceful-ambience.mp3'
            }
        ];
    }

  playSound(id, file) {
    if (this.players[id]) {
        this.players[id].play();
        return;
    }

    const audio = new Audio(file);
    audio.loop = true;
    audio.volume = 0.3;

    audio.play();

    this.players[id] = audio;
}

stopSound(id) {
    if (!this.players[id]) return;

    this.players[id].pause();
    this.players[id].currentTime = 0;

    delete this.players[id];
}

setVolume(id, value) {
    if (this.players[id]) {
        this.players[id].volume = value;
    }
}
}

document.addEventListener('DOMContentLoaded', () => {
    const engine = new SoundscapeEngine();
    const container = document.getElementById('sound-mixers-container');

    if (container) {
        engine.soundsConfig.forEach(sound => {
            const row = document.createElement('div');
            row.className = "flex items-center justify-between p-3 bg-surface-variant/20 rounded-lg border border-outline-variant/10";
            row.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-on-surface-variant">${sound.icon}</span>
                    <span class="font-body-sm text-on-surface">${sound.name}</span>
                </div>
                <div class="flex items-center gap-4 flex-1 max-w-[240px] ml-4">
                    <input type="range" min="0" max="1" step="0.05" value="0.3" class="volume-slider w-full" data-id="${sound.id}">
                    <button class="sound-toggle-btn p-1 text-on-surface-variant hover:text-primary transition-colors" data-id="${sound.id}" data-file="${sound.file}">
                        <span class="material-symbols-outlined">play_arrow</span>
                    </button>
                </div>
            `;
            container.appendChild(row);
        });

        // Listen for actions
        container.addEventListener('click', (e) => {
            const btn = e.target.closest('.sound-toggle-btn');
            if (btn) {
                const id = btn.getAttribute('data-id');
                const file = btn.getAttribute('data-file');
                const iconSpan = btn.querySelector('.material-symbols-outlined');

                if (iconSpan.innerText === 'play_arrow') {
                    engine.playSound(id, engine.playSound(id, file));
                    iconSpan.innerText = 'pause';
                    btn.classList.add('text-primary');
                    // Sync up existing slider adjustments
                    const slider = container.querySelector(`input[data-id="${id}"]`);
                    engine.setVolume(id, parseFloat(slider.value));
                } else {
                    engine.stopSound(id);
                    iconSpan.innerText = 'play_arrow';
                    btn.classList.remove('text-primary');
                }
            }
        });

        container.addEventListener('input', (e) => {
            if (e.target.classList.contains('volume-slider')) {
                const id = e.target.getAttribute('data-id');
                const val = parseFloat(e.target.value);
                engine.setVolume(id, val);
            }
        });
    }
});