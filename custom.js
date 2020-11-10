const app = document.getElementsByClassName("container");
const scoreboard = document.getElementById("score");
let score = 0;

const quiz = {
   q1: {
      question:
         "What is the HTML tag under which one can write the JavaScript code?",
      options: [
         "&#60;javascript&#62;",
         "&#60;scripted&#62;",
         "&#60;script&#62;",
         "&#60;js&#62;"
      ],
      answerid: 2
   },
   q2: {
      question:
         "Choose the correct JavaScript syntax to change the content of the following HTML code.",
      options: [
         "document.getElement(“geek”).innerHTML=”I am a Geek”",
         "document.getElementById(“geek”).innerHTML=”I am a Geek”",
         "document.getId(“geek”)=”I am a Geek”",
         "document.getElementById(“geek”).innerHTML=I am a Geek;"
      ],
      answerid: 1
   },
   q3: {
      question:
         "Choose the correct JavaScript syntax to change the content of the following HTML code.",
      options: [
         "document.getElement(“geek”).innerHTML=”I am a Geek”",
         "document.getElementById(“geek”).innerHTML=”I am a Geek”",
         "document.getId(“geek”)=”I am a Geek”",
         "document.getElementById(“geek”).innerHTML=I am a Geek;"
      ],
      answerid: 1
   },
   q4: {
      question:
         "What is lorem ipsum?",
      options: [
         "Option 1",
         "Option 2",
         "Option 3",
         "Option 4"
      ],
      answerid: 1
   },
};

const checkScore = (e, key, index) => {
   
   let target = e.target.offsetParent.offsetParent.offsetParent;
   let nextCard = e.target.offsetParent.offsetParent.offsetParent.nextElementSibling;
   if(quiz[key].answerid == index) {
      score = score + 1;
   }
   scoreboard.innerHTML = `${score} / ${Object.keys(quiz).length}`;
   target.classList.remove("active")
   nextCard.classList.add("active")
}

const printQuiz = () => {
Object.keys(quiz).forEach(( key, i ) => {
   
   let options = '';
   quiz[key].options.forEach((opt, i) => {
      options += `
      <span>
         <input type="checkbox" onclick="checkScore(event, '${key}', ${i})" id="">
         ${opt}
      </span>
      `;
   });
   
   let first = i === 0 ? "active" : "";

   app[0].insertAdjacentHTML("beforeend", `
   <div class="card ${first}">
      <div class="card-inner">
         <h3>Question ${i+1}</h3>
         <h2>${quiz[key].question}</h2>
         <div class="answers">
            ${options}
         </div>
      </div>
   </div>
   `);
});
};

printQuiz();

// card 
//    

// const question1 = document.getElementById("question1");

// let score = 0;

// question1.addEventListener("click", function (e) {
//    console.log(e);
//    if (e.target.tagName == "INPUT") {
//       console.log("input check");
//       if (e.originalTarget.attributes.name.value == "ans2") {
//          console.log("answer check");
//          score = score + 1;
//       }
//       question1.classList.add("disable");
//    }
// });
