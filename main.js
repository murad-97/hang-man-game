let abc = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(abc);

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  span.classList.add("the-letters");
  span.innerText = `${letter}`;
  let lettersContainer = document.querySelector(".letters-container");
  lettersContainer.appendChild(span);
});

let catagory = {
  movie: ["angry men", "up", "hell", "strangers", "transformers"],
  country: ["jordan", "egypt", "soudi arabia", "iraq", "syria"],
  name: ["olivia", "emma", "charlotte", "amelia", "sophia", "isabella"],
  color: ["red", "green", "blue", "brown", "black"],
};
let words = Object.keys(catagory);
let randomNumbers = Math.floor(Math.random() * words.length);
//the catagory
let randomcatagory = words[randomNumbers];
let valuearray = catagory[randomcatagory];
let randomvaluenumber = Math.floor(Math.random() * valuearray.length);
//the word
let randomvalue = valuearray[randomvaluenumber];

let cataspan = document.querySelectorAll(".catagory");
cataspan.forEach(function name(ele) {
  ele.innerText = `${randomcatagory}`;
});

randomvaluearray = Array.from(randomvalue);
let lettercontainer = document.querySelector(".the-container");
let trueattempts = 0;
randomvaluearray.forEach((letter) => {
  if (letter !== " ") {
    let letterspace = document.createElement("div");
    letterspace.classList.add("letter-span");

    lettercontainer.appendChild(letterspace);
  } else {
    trueattempts = 1;
    let letterspan = document.createElement("div");
    letterspan.classList.add("letter-span");
    letterspan.classList.add("letter-space");
    letterspan.innerText = "-";
    lettercontainer.appendChild(letterspan);
  }
});

letterdivs = document.querySelectorAll(".letter-span");

let drow = document.querySelector(".the-drow");
let attempts = 0;
document.addEventListener("click", (eo) => {
  let thestatus = false;
  if (eo.target.classList[0] === "the-letters") {
    eo.target.classList.add("clicked");
    let letteR = eo.target.innerText.toLowerCase();
    randomvaluearray.forEach((letter, index) => {
      if (letteR === letter) {
        thestatus = true;
        trueattempts++;

        letterdivs.forEach((let, i) => {
          if (i === index) {
            let.innerText = letter;
          }
        });
      }
    });
    if (thestatus === false) {
      attempts++;
      if (attempts < 9) {
        drow.classList.add(`atempt${attempts}`);
      } else {
        drow.classList.add(`atempt${attempts}`);
        let letterbuttons = document.querySelectorAll(".the-letters");
        letterbuttons.forEach((ele) => {
          ele.classList.add("clicked");
        });
        let gameover = document.createElement("div");
        let gameovercon = document.querySelector(".gameover-container");
        gameovercon.style.display = "flex";
        gameover.classList.add("game-over");
        gameover.innerHTML = `<p> game over</p> <button class="reload">try again</button>`;
        gameovercon.appendChild(gameover);
        document.body.appendChild(gameovercon);
        let reload = document.querySelector(".reload");
        reload.addEventListener("click", (eo) => {
          location.reload();
        });
      }
    }
  }

  if (trueattempts === randomvaluearray.length) {
    let gameover = document.createElement("div");
    let gameovercon = document.querySelector(".gameover-container");
    gameovercon.style.display = "flex";
    gameover.classList.add("great-job");
    gameover.innerHTML = `<p> great job <br> the word is:</p><div>##${randomvalue}##</div> <button class="try-again">try again</button>`;
    gameovercon.appendChild(gameover);
    document.body.appendChild(gameovercon);
    let reload = document.querySelector(".try-again");
    reload.addEventListener("click", () => {
      location.reload();
    });
  }
});
