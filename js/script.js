class UI {
  constructor() {
    this.chance = document.querySelector("#chance");
    this.guessPrompt = document.querySelectorAll(".alert");
    this.mainPrompt = document.querySelector("#mainPrompt");
    this.form = document.querySelector("form");
    this.userGuess = document.querySelector("#userInput");
    this.correctAns = Math.ceil(Math.random() * 10);
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
  // randomNum() {
  //   let ranNum = Math.ceil(Math.random() * 10);
  //   return ranNum;
  // }
  checkingAnswer(e) {
    e.preventDefault();
    let userText = parseInt(document.querySelector("#userInput").value);
    let re = /^[0-9]?[0-9]$/;
    let numberCheck = re.test(userText);
    if (numberCheck && userText <= 10 && userText > 0) {
      // AnswerChecking
      console.log(this.correctAns);
      if (userText == this.correctAns) {
        this.mainPrompt.textContent = "You Win!";
      }

      // console.log(numberCheck);
    } else {
      this.mainPrompt.textContent = "Guess a number from 1  to 10";
      this.mainPrompt.classList.replace("text-primary", "text-danger");
    }
  }
}

let ui = new UI();
ui.starUp();
// let a = ui.randomNum();
// console.log(a);

ui.form.addEventListener("submit", ui.checkingAnswer.bind(this));
