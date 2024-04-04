const inputEl = document.querySelector("#input");
const buttons = document.querySelectorAll("button");
const clearEl = document.querySelector("#clear");
const backspaceEl = document.querySelector("#backspace");
const answerScreen = document.querySelector(".answerScreen");

let realTimeScreenValue = [];

// clear
clearEl.addEventListener("click", () => {
  realTimeScreenValue = [""];
  answerScreen.innerHTML = "0";
  inputEl.value = "";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    inputEl.value += e.target.value;
    if (!btn.id.match("backspace")) {
      realTimeScreenValue.push(btn.value);

      if (btn.classList.contains("num_btn")) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
      }
    }

    if (btn.id.match("backspace")) {
      realTimeScreenValue.pop();
      inputEl.value = realTimeScreenValue.join("");
      answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
    }
    if (btn.id.match("equl")) {
      answerScreen.style.fontSize = "24px";
      answerScreen.style.fontWeight = "bold";
    }
    if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
      answerScreen.innerHTML = "0";
    }
  });
});
