// Web Audio API Synthesized Ambient Sound generator for complete portability without missing local assets
class SoundscapeEngine {
    constructor() {
        this.ctx = null;
        this.nodes = {};
        this.soundsConfig = [
            { id: 'rain', name: 'Rainfall', icon: 'water_drop', type: 'pink' },
            { id: 'forest', name: 'Forest Wind', icon: 'forest', type: 'brown' },
            { id: 'white', name: 'White Noise', icon: 'blur_on', type: 'white' },
            { id: 'ocean', name: 'Ocean Waves', icon: 'waves', type: 'sine-mod' }
        ];
    }

    initContext() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    createNoiseBuffer(type) {
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        let lastOut = 0.0; // dynamic brown tracking variables
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            if (type === 'white') {
                output[i] = white;
            } else if (type === 'pink') {
                // Approximate Pink Noise pink filtering matrix values
                output[i] = (white + lastOut) / 2.0;
                lastOut = white;
            } else if (type === 'brown') {
                output[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = output[i];
                output[i] *= 3.5; // Compensate loss
            }
        }
        return noiseBuffer;
    }

    startSound(id, type) {
        this.initContext();
        if (this.nodes[id]) return;

        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.3, this.ctx.currentTime);

        let source;
        if (type === 'sine-mod') {
            // Wave LFO Simulation
            source = this.ctx.createOscillator();
            source.type = 'sine';
            source.frequency.setValueAtTime(80, this.ctx.currentTime);
            
            const lfo = this.ctx.createOscillator();
            lfo.frequency.setValueAtTime(0.2, this.ctx.currentTime);
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
            
            lfo.connect(lfoGain);
            lfoGain.connect(gainNode.gain);
            lfo.start();
            source.start();
        } else {
            source = this.ctx.createBufferSource();
            source.buffer = this.createNoiseBuffer(type);
            source.loop = true;
            source.start();
        }

        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        this.nodes[id] = { source, gainNode };
    }

    stopSound(id) {
        if (this.nodes[id]) {
            try { this.nodes[id].source.stop(); } catch(e){}
            this.nodes[id].source.disconnect();
            this.nodes[id].gainNode.disconnect();
            delete this.nodes[id];
        }
    }

    setVolume(id, val) {
        if (this.nodes[id]) {
            this.nodes[id].gainNode.gain.setValueAtTime(val, this.ctx.currentTime);
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
                    <button class="sound-toggle-btn p-1 text-on-surface-variant hover:text-primary transition-colors" data-id="${sound.id}" data-type="${sound.type}">
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
                const type = btn.getAttribute('data-type');
                const iconSpan = btn.querySelector('.material-symbols-outlined');

                if (iconSpan.innerText === 'play_arrow') {
                    engine.startSound(id, type);
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