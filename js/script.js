class UI {
  constructor() {
    this.chance = document.querySelector("#chance");
    this.guessPrompt = document.querySelectorAll(".alert");
    this.mainPrompt = document.querySelector("#mainPrompt");
    this.form = document.querySelector("form");
    this.userGuess = document.querySelector("#userInput");
    this.correctAns = Math.ceil(Math.random() * 10);
    this.count = 3;
    console.log(this.correctAns);

    // console.log(this.userGuess.value);
  }
  starUp() {
    this.guessPrompt.forEach((prom) => {
      prom.style.visibility = "hidden";
    });
    this.mainPrompt.textContent = "Guess a Number Between 1 to 10";
    this.mainPrompt.classList.replace("text-success", "text-primary");
    this.mainPrompt.style.fontSize = "28px";
  }

  checkingAnswer(e) {
    e.preventDefault();
    console.log(e);

    let userText = parseInt(document.querySelector("#userInput").value);
    let re = /^[0-9]?[0-9]$/;
    let numberCheck = re.test(userText);

    this.count -= 1;
    this.chance.innerHTML = `Chance ${this.count}`;

    if (this.count <= 0 && userText != this.correctAns) {
      this.mainPrompt.textContent = "You Lose";
      this.userGuess.disabled = true;
      document.querySelector("#guess").disabled = true;
      return;
    }

    if (userText !== this.correctAns) {
      if (userText < this.correctAns) {
        this.guessPrompt[0].removeAttribute("style");

        this.guessPrompt[1].setAttribute("style", "visibility:hidden");
        console.log(this.guessPrompt[0].innerHTML);
        this.chance.innerHTML = `Chance: ${this.count}`;
      } else {
        this.guessPrompt[1].removeAttribute("style");
        this.guessPrompt[0].setAttribute("style", "visibility:hidden");
      }
      this.mainPrompt.textContent = "";
      this.mainPrompt.textContent = `Wrong ${3 - this.count}X`;
      this.userGuess.value = "";
    } else if (userText === this.correctAns) {
      this.mainPrompt.textContent = "You Win!";
      this.mainPrompt.style.fontSize = "50px";
      this.guessPrompt[0].setAttribute("style", "visibility:hidden");
      this.guessPrompt[1].setAttribute("style", "visibility:hidden");
      this.userGuess.disabled = true;
      document.querySelector("#guess").disabled = true;
    }

    console.log(this.count);
  }
}

let ui = new UI();
ui.starUp();

ui.form.addEventListener("submit", ui.checkingAnswer.bind(ui));
document
  .querySelector("#reset")
  .addEventListener("click", (e) => window.location.reload());
