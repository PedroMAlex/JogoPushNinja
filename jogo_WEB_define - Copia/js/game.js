const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1024
const canvasHeight = 576

canvas.width = canvasWidth
canvas.height = canvasHeight

const desiredFPS = 120;
const frameTime = 1000 / desiredFPS; 

let prevTime = performance.now();
let lag = 0;


function animate() {
    const currentTime = performance.now();
    const elapsed = currentTime - prevTime;
    prevTime = currentTime;
    lag += elapsed;

    handleControls();
    handleControls2();
   

    while (lag >= frameTime) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        background.update();
        player.update();
        checkPlayerBounds(player, canvasWidth, canvasHeight);
        player2.update();
        checkPlayerBounds2(player2, canvasWidth, canvasHeight);

        lag -= frameTime;
    }
    window.requestAnimationFrame(animate);
}

animate(); 