const backgroundAudio = document.getElementById('background-audio');
const audioControl = document.getElementById('audio-control');

if (backgroundAudio) {
    const startAudio = () => {
        backgroundAudio.play()
            .then(() => {
                if (audioControl) {
                    audioControl.hidden = true;
                }
            })
            .catch((error) => {
                if (audioControl) {
                    audioControl.hidden = false;
                }
                console.warn('El navegador bloqueo el autoplay con sonido:', error);
            });
    };

    startAudio();

    const enableAudioAfterInteraction = () => {
        startAudio();
        window.removeEventListener('pointerdown', enableAudioAfterInteraction);
        window.removeEventListener('keydown', enableAudioAfterInteraction);
    };

    audioControl?.addEventListener('click', () => {
        startAudio();
    });
    window.addEventListener('pointerdown', enableAudioAfterInteraction, { once: true });
    window.addEventListener('keydown', enableAudioAfterInteraction, { once: true });
}

const gifTooltip = document.createElement('span');
gifTooltip.className = 'gif-tooltip';
document.body.appendChild(gifTooltip);

document.querySelectorAll('.video[title]').forEach((gif) => {
    const showTooltip = () => {
        const bounds = gif.getBoundingClientRect();
        gifTooltip.textContent = gif.title;
        gifTooltip.style.left = `${bounds.left + bounds.width / 2}px`;
        gifTooltip.style.top = `${bounds.top}px`;
        gifTooltip.classList.add('visible');
    };

    gif.addEventListener('mouseenter', showTooltip);
    gif.addEventListener('mousemove', showTooltip);
    gif.addEventListener('mouseleave', () => {
        gifTooltip.classList.remove('visible');
    });
});