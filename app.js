//Script here
const data = [
  [
    "The thinlip mullet  is a species of fish in the family Mugilidae. It is found in shallow European waters and is a migratory species.  The thin lip mullet has an elongate body compressed laterally. The head is short and flattened and the mouth is broad with a narrow upper lip and no tubercles. There are two dorsal fins. It is steely blue above and paler beneath. The scales are large and there is no externally visible lateral line Its maximum length is around 70  cm, with the common specimen being around 35  cm. The largest specimens recorded weighed over three kilograms.Spawning takes place at sea, near the coast between September and February.",
  ],
  [
    "Quantum technology is approaching the mainstream. Goldman Sachs recently announced that they could introduce quantum algorithms to price financial instruments in as soon as five years. Honeywell anticipates that quantum will form a $1 trillion industry in the decades ahead. But why are firms like Goldman taking this leap — especially with commercial quantum computers being possibly years away?",
  ],
  [
    "Dark matter is an invisible material that lurks throughout the cosmos. In fact, it makes up about 85 percent of the matter in the universe. Unlike the ordinary matter inside you, your computer, the planet and all the stars in the sky, dark matter doesn’t produce or reflect any light. For decades, physicists have tried to identify the particles that make up this mysterious substance. But so far, all searches have come up empty.",
  ],
  [
    "A crocodile cannot stick its tongue out.A shrimp's heart is in its head.It is physically impossible for pigs to look up into the sky.The 'sixth sick shei'ks sixth sheep'' is believed to be the toughest tongue twister in the English language.If you sneeze too hard, you could fracture a rib.Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.In the course of an average lifetime, while sleeping you might eat around 70 assorted insects and 10 spiders, or more.Some lipsticks contain fish scales.Cat urine glows under a black-light.Like fingerprints, everyone's tongue print is different.Rubber bands last longer when refrigerated.There are 293 ways to make change for a dollar.The average person's left hand does 56% of the typing (when using the proper position of the hands on the keyboard; Hunting and pecking doesn't count!).A shark is the only known fish that can blink with both eyes.The longest one-syllable words in the English language are 'scraunche' and 'strengthed.' Some suggest that 'squirreled' could be included, but squirrel is intended to be pronounced as two syllables (squir-rel) according to most dictionaries. 'Screeched' and 'strengths' are two other long one-syllable words, but they only have 9 letters.'Dreamt' is the only English word that ends in the letters 'mt'.Almonds are a member of the peach family.Maine is the only state that has a one-syllable name.",
  ],
];

//elements declaration --------------
const displayText = document.querySelector(".text");
const input = document.querySelector("#input");
displayText.innerText = data[2];

const text = displayText.innerText;
const initialhtml = displayText.innerHTML;
let words = text.split(" ");
let slideCount = 1;
let inputwords = [];
let matches = 0;
const resbtn = document.querySelector("#restart-button");
const topicList = document.querySelector(".topic-list");
const topicSelector = document.querySelector("#topic-selector");
/////////////////////////////////////////////////
function findInputWords(inText) {
  // finding input words
  const words = inText.split(" ");
  return words;
}

function checkMatching(inWords) {
  let matchCount = 0;
  for (let i = 0; i < words.length; i++) {
    //loop over every word in input
    if (words[i] == inWords[i]) {
      //////////////////////////////////////////////////////////////////////
      let changed = "";
      for (let j = 0; j < words.length; j++) {
        //changing html of textarea
        if (i == j) {
          changed += "<span class='positive'>" + words[i] + "</span> ";
        } else {
          changed += words[j] + " ";
        }
      }
      displayText.innerHTML = changed;
      //////////////////////////////////////////////////////////////////////
      console.log("data-----", words[i], "input data -------", inWords[i]);
      matchCount += 1;
    }
  }
  if (inWords.length >= 6 * slideCount) {
    //sliding mechanism
    displayText.style.transform = "translateY(-" + `${30 * slideCount}` + "px)";
    slideCount += 1;
  }
  return matchCount;
}
function inputEvent() {
  inputwords = findInputWords(input.value);
  matches = checkMatching(inputwords);
}
//Event listener------------------------------------
input.addEventListener("input", inputEvent);
let timeInterval;
////////////////////////////////timer
const timertext = document.querySelector("#timerid");
function setTimer(time = 60) {
  input.removeAttribute("disabled");
  timeInterval = setInterval(() => {
    timertext.innerText = `0:${time}`;
    time--;
    if (time <= 0) {
      clearInterval(timeInterval);
      timertext.style.fontSize = "0.6em";
      timertext.innerText = `0:00-Time out`;
      input.style.pointerEvents = "none";
      input.removeEventListener("input", inputEvent);
      displayText.style.transform = "translateY(0px)";
      input.value = "TIME UP!!\n" + ` Words- ${matches}`;
      input.style.fontWeight = "100";
      input.style.textAlign = "center";
      input.setAttribute("disabled", "true");
    }
  }, 1000);
}
resbtn.addEventListener("click", (e) => {
  input.value = "";
  displayText.style.transform = "translateY(0px)";
  displayText.innerHTML = initialhtml;
  timertext.value = " ";
  input.style.fontWeight = "normal";
  input.style.fontSize = "1.3em";
  input.style.textAlign = "left";
  input.style.pointerEvents = "unset";
  timertext.style.fontSize = "1em";

  input.addEventListener("input", inputEvent);
  clearInterval(timeInterval);
  setTimer(timingToExecute);
});
let clicknum = 0;
topicSelector.addEventListener("click", (e) => {
  topicList.classList.toggle("display");
  clicknum += 1;
  if (clicknum > 1) {
    console.log(e.target);
    clicknum = 0;
    if (e.target.value == -1) {
      let randomValue = Math.floor(Math.random() * data.length);
      displayText.innerText = `${data[randomValue]}`;
      words = displayText.innerText.split(" ");
    } else {
      if (e.target.value == undefined) {
        displayText.innerText = data[0];
        words = displayText.innerText.split(" ");
      } else {
        displayText.innerText = `${data[e.target.value]}`;
        words = displayText.innerText.split(" ");
      }
    }
  }
});

//molik script

// For drop-down..................

//  use this 2 variable for getting time and difficulity
var timingToExecute = 60;
var difficulity = "easy";

dropDown(".drop>button", ".inside-drop", ".drop-btn", ".drop i");
dropDown(".drop2>button", ".inside-drop2", ".drop-btn2", ".drop2 i");
function dropIcon(icos) {
  let ico = document.querySelector(icos);
  ico.style.transition = "1ms transform";
  ico.style.transform = "rotateX(0deg)";
  ico.style.top = "16px";
}
function dropIcon2(icos2) {
  let ico = document.querySelector(icos2);
  ico.style.transition = "1ms transform";
  ico.style.transform = "rotateX(180deg)";
  ico.style.top = "11px";
}
function dropDown(forone, fortwo, forthree, icos) {
  let pBtn = document.querySelector(forone);
  let dropUl = document.querySelector(fortwo);
  let dropbtn = document.querySelectorAll(forthree);

  pBtn.addEventListener("click", () => {
    dropUl.style.display = "block";
    dropIcon(icos);
  });
  dropUl.addEventListener("click", () => {
    dropUl.style.display = "none";
    dropIcon2(icos);
  });
  for (let i = 0; i < dropbtn.length; i++) {
    dropbtn[i].addEventListener("click", () => {
      pBtn.innerText = dropbtn[i].innerText;
      if (forone == ".drop>button")
        switch (i) {
          case 0:
            timingToExecute = 60;
            break;
          case 1:
            timingToExecute = 120;
            break;
          case 2:
            timingToExecute = 300;
            break;
          case 3:
            timingToExecute = 600;
            break;
        }
      else {
        switch (i) {
          case 0:
            difficulity = "easy";
            break;
          case 1:
            difficulity = "medium";
            break;
          case 2:
            difficulity = "hard";
            break;
          case 3:
            difficulity = "professional";
            break;
        }
      }
    });
    dropUl.style.display = "none";
  }
}
/////////////////
const startstagediv = document.querySelector(".front-main ");
const displayarea = document.querySelector(".display-area");
const inputarea = document.querySelector(".input-area");
const displaytopbar = document.querySelector(".display-top-bar");
///////////////////////
let strtTest = document.querySelector("#strt-test");
strtTest.addEventListener("click", () => {
  console.log(timingToExecute, difficulity);
  let pBtn = document.querySelector(".drop>button");
  pBtn.innerText = "1 Minute Test";
  pBtn = document.querySelector(".drop2>button");
  pBtn.innerText = "Easy Text";
  //////////////////////
  startstagediv.classList.toggle("startstage");
  setTimeout(() => {
    startstagediv.classList.toggle("startstagedisplay");
  }, 500);
  setTimeout(() => {
    displayarea.classList.toggle("midstage");
    inputarea.classList.toggle("midstage");
    displaytopbar.classList.toggle("midstage");
  }, 500);
  displayarea.classList.toggle("midstageanim");
  inputarea.classList.toggle("midstageanim");
  displaytopbar.classList.toggle("midstageanim");
  setTimer(timingToExecute);
});

// drop-down ends here..........

//merge code
