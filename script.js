let guessInput = document.getElementById("guess");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let checkButton = document.getElementById("checkBtn");
checkButton.addEventListener("click", function () {
    let userGuess = Number(document.getElementById("guess").value);
    if (isNaN(userGuess)) {
        document.getElementById("message").textContent = "Please enter a valid number!";
        return;
    }
    attempts++;
    document.getElementById("attempts").textContent = "Attempts: " + attempts;
    if (userGuess === randomNumber) {
        document.getElementById("message").textContent = "Correct! 🎉";
        document.getElementById("guess").disabled = true;
        checkButton.disabled = true;
    }
    else if (userGuess > randomNumber) {
        document.getElementById("message").textContent = "Too High!";
    }
    else {
        document.getElementById("message").textContent = "Too Low!";
    }
});
guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkButton.click();
    }
});