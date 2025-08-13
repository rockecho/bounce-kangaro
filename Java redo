let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let ball = { x: 240, y: 300, radius: 12, color: "orange", dy: 0, dx: 0, spinning: 0 };
let hoop = { x: 200, y: 50, width: 80, height: 10 };
let score = 0;
let gravity = 0.5;
let gameStarted = false;

function startGame() {
    score = 0;
    resetBall();
    gameStarted = true;
}

function resetBall() {
    ball.x = 240;
    ball.y = 300;
    ball.dy = 0;
    ball.dx = 0;
    ball.spinning = 0;
}

function drawBall() {
    // Ball shadow
    ctx.beginPath();
    ctx.arc(ball.x + 3, ball.y + 3, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fill();
    ctx.closePath();

    // Main ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#cc5500";
    ctx.stroke();
    ctx.closePath();

    // Ball seams (rotating)
    ctx.save();
    ctx.translate(ball.x, ball.y);
    ctx.rotate(ball.spinning);
    ctx.beginPath();
    ctx.moveTo(-ball.radius, 0);
    ctx.lineTo(ball.radius, 0);
    ctx.moveTo(0, -ball.radius);
    ctx.lineTo(0, ball.radius);
    ctx.strokeStyle = "#8b0000";
    ctx.stroke();
    ctx.restore();
}

function drawHoop() {
    // Backboard
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(hoop.x + hoop.width / 2 - 25, hoop.y - 20, 50, 10);

    // Rim
    ctx.beginPath();
    ctx.arc(hoop.x + hoop.width / 2, hoop.y, hoop.width / 2, 0, Math.PI, false);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();

    // Net
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        ctx.moveTo(hoop.x + i * 10 + 10, hoop.y);
        ctx.lineTo(hoop.x + hoop.width / 2, hoop.y + 20);
    }
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.stroke();
}

function drawScore() {
    document.getElementById("scoreDisplay").innerText = "Score: " + score;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHoop();
    drawBall();
    drawScore();

    if (gameStarted) {
        ball.dy += gravity;
        ball.y += ball.dy;
        ball.x += ball.dx;
        ball.spinning += 0.1;

        if (
            ball.y - ball.radius < hoop.y + 5 &&
            ball.x > hoop.x &&
            ball.x < hoop.x + hoop.width &&
            ball.dy < 0
        ) {
            score++;
        }

        if (ball.y > canvas.height) {
            resetBall();
        }
    }
    requestAnimationFrame(draw);
}

canvas.addEventListener("click", () => {
    if (!gameStarted) return;
    ball.dy = -8;
    ball.dx = (Math.random() - 0.5) * 4; // slight side movement
});

draw();
