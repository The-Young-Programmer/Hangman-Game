var word = [
      ["Hangman", "That game you are playing right now."],
      ["Nemonet", "About the creator of this game."],
      ["HTML", "Markup language for creating Web pages."],
      ["CSS", "Wep page styles"],
      ["PHP", "A very popular server scripting language."],
      ["JavaScript", "Make web-page dynamic without reload the web page."],
      ["Java", "Run 15 billion devices.\nA program can be run in Windows, Linux and Mac"],
      ["Github", "A company that everyone can code for fun and share."],
      ["Love", "What is ?\nBaby don't hurt me\nDon't hurt me\nNo more"],
      ["Document", "A lot of text in the a file."],
      ["Playground", "There school kids go to."],
      ["Run", "Usain bolt."],
      ["Code", "var hw = 'Hello World';"],
      ["Samsung", "A company create Phone, Tv, Monitor, SDD, Memory chip..."],
      ["Super Mario", "A very popular game in Nintendo 64 that have red hat."],
      ["Star", "Super Mario like to get."],
      ["Clock", "14:12 or 14pm"],
      ["Binary Clock", "A clock that only use 0 or 1."],
      ["Sword", "Link from Zelda have on the hand."],
      ["Girl", "Not boy but ?"],
      ["Boy", "Not girl but ?"],
      ["Female", "Other name as girl."],
      ["Male", "Other name as boy."],
      ["Smartphone", "Something you've always on you."],
      ["MUG", "A large cup."],
      ["TELEPHONE", "A system for transmitting voices."],
      ["CAR", "Moving object powered by an engine."],
      ["HORSE", "A domesticated, odd-toed, hoofed mammal."],
      ["CAMERA", "Can shoot you without causing any harm. What is it?"],
      ["OLDER", "What everyone gets at the same time?"],
      ["FOOTSTEP", "The more you take, the more you leave behind. What am I?"],
      ["ENVELOPE", "What word begins and ends with an E, but only has one letter?"],
      ["SQUARE", "A shape that have all size equal."],
      ["HOUSE", "A building for human habitation"],
      ["MEADOW", "A piece of grassland, especially one used for hay."],
      ["BULL", "A male animal of the cow."],
      ["TOWEL", "A thick soft cloth in the bathroom"],
      ["BAG", "#"],
      ["BOOK", "#"],
      ["PLATE", "#"],
      ["PERFUME", "#"],
      ["PEN", "#"],
      ["BENCH", "#"],
      ["BLOCK", "#"],
      ["ELEPHANT", "#"],
      ["COMMODE", "#"],
      ["LAPTOP", "#"],
      ["CABLE", "#"],
      ["TIME", "What flies without wings?"],
      ["SPOON", "#"],
      ["HAND", "#"],
      ["EAR", "#"],
      ["PIERCE", "#"],
      ["DRESS", "#"],
      ["BLANKET", "#"],
      ["SHOES", "#"],
      ["CAT", "#"],
      ["SAND", "#"],
      ["LAVA", "#"],
      ["SHARK", "#"],
      ["DRAWER", "#"],
      ["FIGURE", "#"],
      ["DESK", "#"],
      ["WIPER", "#"],
      ["WATER", "#"],
      ["SANDWICH", "Yummy filling between bread. What is it?"],
      ["TRUCK", "#"],
      ["DOLL", "#"],
      ["GUITAR", "#"],
      ["DRUM", "#"],
      ["PIANO", "#"],
      ["PLATTER", "#"],
      ["PUZZLE", "#"],
      ["TIGER", "#"],
      ["BEAR", "#"],
      ["LINOLEUM", "#"],
      ["STICKER", "#"],
      ["FOLDER", "#"],
      ["FILE", "#"],
      ["LIST", "#"],
      ["CLOCK", "#"],
      ["FOX", "#"],
      ["BUTTERFLY", "#"],
      ["KEYBOARD", "#"],
      ["CAMERA", "#"],
      ["LENS", "#"],
      ["SMARTPHONE", "#"],
      ["FISHNET", "#"],
      ["STOCKING", "#"],
      ["CLOTH", "#"],
      ["TURTLE", "#"],
      ["FISH", "#"],
      ["BONE", "#"],
      ["ICE", "#"],
      ["GROUND", "#"],
      ["SALAD", "#"],
      ["BIKE", "#"],
      ["PLANE", "#"],
      ["TRAIN", "#"],
      ["METRO", "#"],
      ["SHIP", "#"],
      ["VEST", "#"],
      ["PHOTO", "#"],
      ["STRING", "#"],
      ["CHAIN", "#"],
      ["BRACELET", "#"],
      ["COLLAR", "#"],
      ["FUR", "#"],
      ["DISH", "#"],
      ["SINK", "#"],
      ["COOKER", "#"],
      ["AQUARIUM", "#"],
      ["WOOL", "#"],
      ["PILLOW", "#"],
      ["CAP", "#"],
      ["BAND", "#"],
      ["BANDANA", "#"],
      ["DRAGON", "#"],
      ["SHELL", "#"],
      ["GLOBE", "#"],
      ["MICROSCOPE", "#"],
      ["JACKET", "#"],
      ["PICTURE", "#"],
      ["KARMA", "#"],
      ["RIPE", "#"],
      ["RUBBER", "#"],
      ["COUNTER", "#"],
      ["CASES", "#"],
      ["SWITCH", "#"],
      ["ILO", "#"],
      ["BROOM", "#"],
      ["ONION", "Take off my skin, I won't cry, but you will. What Am I?"],
      ["SHEET", "#"],
      ["LEAF", "#"],
];

// Game keyboard

// Game memory
var select = 0;
var wordLeft = [];
var fail = 0;

// Web-page onload
window.onload = function () {
      gId("moveKeybord").addEventListener(
            "touchmove",
            function (e) {
                  wH = window.innerHeight;
                  tY = e.touches[0].clientY;
                  eL = gId("tastatur");
                  resY = wH - tY - eL.offsetHeight;
                  if (resY < 0) {
                        resY = 0;
                  } else if (resY > wH / 2) {
                        resY = wH / 2;
                  }
                  eL.style.bottom = resY + "px";
            },
            false
      );
      createTastur();
};

window.addEventListener("keydown", e=>{
      if(e.isComposing || !gId("result").className || !tastatur.includes(e.key.toUpperCase())) return;
      bTas(gId(`key-${e.key.toUpperCase()}`));
});

// Start game
function startGame() {
      gId("home").className = "h";
      gId("result").className = "h";
      newGame();
}

// New game
function newGame() {
      clearTastatur();
      clearPlayer();
      createWord();
}

// Clear keyboard
function clearTastatur() {
      var e = document.getElementsByClassName("b");
      for (a = 0; a < e.length; a++) {
            e[a].setAttribute("data", "");
      }
}

// Clear player
function clearPlayer() {
      fail = 0;
      wordLeft = [];
      gId("g0").setAttribute("data", "false");
      gId("g1").setAttribute("data", "false");
      gId("g2").setAttribute("data", "false");
      gId("g3").setAttribute("data", "false");
      gId("g4").setAttribute("data", "false");
      gId("g5").setAttribute("data", "false");
      gId("g5").setAttribute("r", "false");
      gId("g5").setAttribute("l", "false");
      gId("g6").setAttribute("data", "false");
      gId("g6").setAttribute("l", "false");
      gId("g6").setAttribute("r", "false");
      gId("hintButton").setAttribute("data", "false");
      gId("hint").style.display = "none";
}

// Get new word
function createWord() {
      var d = gId("letter");
      d.innerHTML = "";
      select = Math.floor(Math.random() * word.length);
      for (a = 0; a < word[select][0].length; a++) {
            var x = word[select][0][a].toUpperCase();
            var b = document.createElement("span");
            b.className = "l" + (x == " " ? " ls" : "");
            b.innerHTML = "&nbsp";
            b.id = "l" + a;
            d.appendChild(b);

            if (x != " ") {
                  if (wordLeft.indexOf(x) == -1) {
                        wordLeft.push(x);
                  }
            }
      }
}

// Create keyboard
function createTastur() {
      var tas = gId("keybord");
      tas.innerHTML = "";
      [...tastatur].forEach(a => {
            var b = document.createElement("span");
            b.className = "b";
            b.id = `key-${a}`;
            b.innerText = a;
            b.setAttribute("data", "");
            b.onclick = function () {
                  bTas(this);
            };
            tas.appendChild(b);
      });
}

// Game check, If show next error / game end
function bTas(a) {
      if (a.getAttribute("data") == "") {
            var x = isExist(a.innerText);
            a.setAttribute("data", x);
            if (x) {
                  if (wordLeft.length == 0) {
                        gameEnd(true);
                  }
            } else {
                  showNextFail();
            }
      }
}

// If letter "X" exist
function isExist(e) {
      e = e.toUpperCase();
      var x = wordLeft.indexOf(e);
      if (x != -1) {
            wordLeft.splice(x, 1);
            typeWord(e);
            return true;
      }
      return false;
}

// Show next fail drawing
function showNextFail() {
      fail++;
      switch (fail) {
            case 1:
                  gId("g0").setAttribute("data", "true");
                  break;

            case 2:
                  gId("g1").setAttribute("data", "true");
                  break;

            case 3:
                  gId("g2").setAttribute("data", "true");
                  break;

            case 4:
                  gId("g3").setAttribute("data", "true");
                  gId("hintButton").setAttribute("data", "true");
                  break;

            case 5:
                  gId("g4").setAttribute("data", "true");
                  break;

            case 6:
                  gId("g5").setAttribute("data", "true");
                  break;

            case 7:
                  gId("g5").setAttribute("l", "true");
                  break;

            case 8:
                  gId("g5").setAttribute("r", "true");
                  break;

            case 9:
                  gId("g6").setAttribute("data", "true");
                  gId("g6").setAttribute("l", "true");
                  break;

            case 10:
                  gId("g6").setAttribute("r", "true");
                  gameEnd(false);
                  break;
      }
}

function typeWord(e) {
      for (a = 0; a < word[select][0].length; a++) {
            if (word[select][0][a].toUpperCase() == e) {
                  gId("l" + a).innerText = e;
            }
      }
}

// Game result
function gameEnd(e) {
      var d = gId("result");
      d.setAttribute("data", e);
      if (e) {
            gId("rT").innerText = "You Win!";
            gId("rM").innerHTML = "Congratulations, you found the word!<br/><br/>Good Job!";
      } else {
            gId("rT").innerText = "You Lose!";
            gId("rM").innerHTML = 'The word was <br/><br/>"' + word[select][0].toUpperCase() + '"<br/><br/>Better luck next time.';
      }
      d.className = "";
}

// Show hint
function hint() {
      gId("hintText").innerText = word[select][1];
      gId("hint").style.display = "block";
}

// Exit hint
function hintExit() {
      gId("hint").style.display = "none";
}

// Get HTML ID element by name
function gId(a) {
      return document.getElementById(a);
}
