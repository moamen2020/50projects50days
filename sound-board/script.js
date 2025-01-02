const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
    soundPlayer.stop();
    soundPlayer.play(sound);
    })

    document.getElementById('buttons').appendChild(btn)
})

const soundPlayer = {
  stop() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);

      song.pause();
      song.currentTime = 0;
    });
  },

  play(sound) {
    document.getElementById(sound).play();
  },
};
