import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
const element = document.getElementById("disco");
const playBtn = document.getElementById("play")
let degrees = 0;

function animate() {
  degrees += 1; // Control rotation speed here
  element.style.transform = `rotate(${degrees}deg)`;

  // Continuous loop at ~60fps
  requestAnimationFrame(animate);
}

animate();

var wavesurfer = WaveSurfer.create({
  container: ".progress-container",
  waveColor: "white",
  progressColor:'#fa8a20',
  url: 'https://cdn.jumpshare.com/preview/QIFheCOee5pjBE5m5j16RbtYqJWndXd0S_JuKT3c9BUwrfUJpz2BUpYL2ercSu2CqJ2vDjTLJRfwOktxRIds0eGyh0TISzGyy-SiElCV9iOTwKVy7YHzIGM9pf-DbAR8gprthbeFXhc5_zoEMdDHVG6yjbN-I2pg_cnoHs_AmgI.mp3',
  height: 30,
  barWidth: 2,
  autoplay: true,
});

wavesurfer.on('load', () => {
  wavesurfer.play()
})

const elapsedSeconds = wavesurfer.getCurrentTime();

wavesurfer.on('timeupdate', (currentTime) => {
    // currentTime is the elapsed time in seconds
    console.log("Elapsed time:", currentTime.toFixed(2));
    
    // Example: Updating an HTML element
    document.getElementById('elapsed').innerText = formatTime(currentTime);
});

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.floor(seconds % 60);
    const paddedSeconds = secondsRemainder < 10 ? `0${secondsRemainder}` : secondsRemainder;
    return `${minutes}:${paddedSeconds}`;
};