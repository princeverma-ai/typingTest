//Script here
const data = [
  [
    "The thinlip mullet  is a species of fish in the family Mugilidae. It is found in shallow European waters and is a migratory species.  The thin lip mullet has an elongate body compressed laterally. The head is short and flattened and the mouth is broad with a narrow upper lip and no tubercles. There are two dorsal fins. It is steely blue above and paler beneath. The scales are large and there is no externally visible lateral line Its maximum length is around 70  cm, with the common specimen being around 35  cm. The largest specimens recorded weighed over three kilograms.Spawning takes place at sea, near the coast between September and February.",
  ],
  [
    "Chicago Pile-1 (CP-1) was the world's first artificial nuclear reactor. On 2 December 1942, the first human-made self-sustaining nuclear chain reaction was initiated in CP-1, during an experiment led by Enrico Fermi. The secret development of the reactor was the first major technical achievement for the Manhattan Project, the Allied effort to create atomic bombs during World War II. Developed by the Metallurgical Laboratory at the University of Chicago, it was built under the west viewing stands of the original Stagg Field. Although the project's civilian and military leaders had misgivings about the possibility of a disastrous runaway reaction, they trusted Fermi's safety calculations and decided they could carry out the experiment in a densely populated area. Fermi described the reactor as a crude pile of black bricks and wooden timbers",
  ],
  [
    "The discovery of the neutron and its properties was central to the extraordinary developments in atomic physics in the first half of the 20th century. Early in the century, Ernest Rutherford developed a crude model of the atom, based on the gold foil experiment of Hans Geiger and Ernest Marsden. In this model, atoms had their mass and positive electric charge concentrated in a very small nucleus. By 1920 chemical isotopes had been discovered, the atomic masses had been determined to be (approximately) integer multiples of the mass of the hydrogen atom, and the atomic number had been identified as the charge on the nucleus. Throughout the 1920s, the nucleus was viewed as composed of combinations of protons and electrons, the two elementary particles known at the time, but that model presented several experimental and theoretical contradictions.",
  ],
  [
    "Gliding is a recreational activity and competitive air sport[1] in which pilots fly unpowered aircraft known as gliders or sailplanes using naturally occurring currents of rising air in the atmosphere to remain airborne. The word soaring is also used for the sport. Gliding as a sport began in the 1920s. Initially the objective was to increase the duration of flights but soon pilots attempted cross-country flights away from the place of launch. Improvements in aerodynamics and in the understanding of weather phenomena have allowed greater distances at higher average speeds. Long distances are now flown using any of the main sources of rising air: ridge lift, thermals and lee waves. When conditions are favourable, experienced pilots can now fly hundreds of kilometres before returning to their home airfields; occasionally flights of more than 1,000 kilometres (621 mi) are achieved.",
  ],
];

//elements declaration --------------
const displayText = document.querySelector(".text");
const input = document.querySelector("#input");
displayText.innerText = data[2];

const text = displayText.innerText;
const initialhtml = displayText.innerHTML;
const words = text.split(" ");
let slideCount = 1;
let inputwords = [];
let matches = 0;
const resbtn=document.querySelector('#restart-button');

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
function setTimer(time=60){
 timeInterval = setInterval(() => {
  timertext.innerText = `0:${time}`;
  time--;
  if (time <= 0) {
    clearInterval(timeInterval);
    timertext.style.fontSize = "0.6em";
    timertext.innerText = `0:00-Time out`;
    input.style.pointerEvents="none";
    input.removeEventListener("input",inputEvent)
    displayText.style.transform="translateY(0px)"
    input.value="TIME UP!!\n"+` Words- ${matches}`
    input.style.fontWeight="100";
    input.style.textAlign="center";
  }
}, 1000);
}
setTimer();
resbtn.addEventListener('click',(e)=>{
  input.value=""
  displayText.style.transform="translateY(0px)"
  displayText.innerHTML=initialhtml;
  input.style.fontWeight="normal";
  input.style.fontSize="1.5em";
  input.style.textAlign="left";
  timertext.value = " ";
  timertext.style.fontSize = "1em";

input.addEventListener("input", inputEvent);
  clearInterval(timeInterval);
  setTimer(60);

})