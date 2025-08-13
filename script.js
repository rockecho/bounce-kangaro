let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let ball = { x: 240, y: 300, radius: 10, color: "orange", dy: 0 };
let hoop = { x: 200, y: 50, width: 80, height: 10, color: "red" };
let score = 0;
let gravity = 0.5;
let gameStarted = false;

function startGame() {
    score = 0;
    ball.x = 240;
    ball.y = 300;
    ball.dy = -8;
    gameStarted = true;
    draw();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function drawHoop() {
    ctx.beginPath();
    ctx.rect(hoop.x, hoop.y, hoop.width, hoop.height);
    ctx.fillStyle = hoop.color;
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    document.getElementById("scoreDisplay").innerText = "Score: " + score;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawHoop();
    drawScore();

    if (gameStarted) {
        ball.dy += gravity;
        ball.y += ball.dy;

        if (ball.y - ball.radius < hoop.y + hoop.height &&
            ball.x > hoop.x &&
            ball.x < hoop.x + hoop.width &&
            ball.dy < 0) {
            score++;
        }

        if (ball.y > canvas.height) {
            ball.x = 240;
            ball.y = 300;
            ball.dy = -8;
        }
    }
    requestAnimationFrame(draw);
}

draw();
