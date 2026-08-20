const params = new URLSearchParams(window.location.search);
const score = parseInt(params.get("score"));

const message = document.getElementById("message");
const scoreText = document.getElementById("scoreText");

scoreText.innerText = "Your Score: " + score + " / 20";

if (score >= 14) {
    message.innerText = "🎉 Congratulations! You Passed!";
    document.body.classList.add("win");
} else {
    message.innerText = "😢 Sorry! You Failed!";
    document.body.classList.add("loss");
}