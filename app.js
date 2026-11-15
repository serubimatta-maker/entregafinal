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