 
let score = 0;
let questionNum= 0;
let answerNum = 0;
let currentAnswer = "";
let correctAnswer = "";
let cPic = 0;
const QUESTIONS = [
  {id: cuid(), name: "What is the most recent game in the Call of Duty series?"},
  {id: cuid(), name: "Which of these is a champion in League of Legends?"},
  {id: cuid(), name: "What streaming website are Shroud and Ninja partners of?"},
  {id: cuid(), name: "Which of these characters are not in Super Smash Brothers Ultimate?"},
  {id: cuid(), name: "What was the biggest fortnite event this year?"},
];
const ANSWERS = [
    {id: cuid(), name: "Modern Warfare", checked: true, group: "A"},
    {id: cuid(), name: "Black ops 4", checked: false, group: "B"},
    {id: cuid(), name: "World Warfare", checked: false, group: "C"},
    {id: cuid(), name: "World War", checked: false, group: "D"},
    {id: cuid(), name: "McCree", checked: false, group: "A"},
    {id: cuid(), name: "Tylander", checked: false, group: "B"},
    {id: cuid(), name: "Annie", checked: true, group: "C"},
    {id: cuid(), name: "Artemis", checked: false, group: "D"},
    {id: cuid(), name: "Youtube", checked: false, group: "A"},
    {id: cuid(), name: "Mixer", checked: true, group: "B"},
    {id: cuid(), name: "Twitch", checked: false, group: "C"},
    {id: cuid(), name: "Hulu", checked: false, group: "D"},
    {id: cuid(), name: "Sonic", checked: false, group: "A"},
    {id: cuid(), name: "Mario", checked: false, group: "B"},
    {id: cuid(), name: "Waluigi", checked: true, group: "C"},
    {id: cuid(), name: "Pac Man", checked: false, group: "D"},
    {id: cuid(), name: "Season 10", checked: false, group: "A"},
    {id: cuid(), name: "Shotgun rework", checked: false, group: "B"},
    {id: cuid(), name: "Season 15", checked: false, group: "C"},
    {id: cuid(), name: "Black Hole", checked: true, group: "D"},
];
const PICTURES = [`<img src="images/callOfDuty.jpg" alt="callOfDuty" class="images" width= "200px">`,
`<img src="images/modernWarfare.jpg" alt="MW" class="images" width= "200px">`,
`<img src="images/league.jpg" alt="league" class="images" width= "200px">`,
`<img src="images/annie.jpg" alt="annie" class="images" width= "200px">`,
`<img src="images/ninja.jpg" alt="MW" class="images" width= "200px">`,
`<img src="images/mixer.jpg" alt="MW" class="images" width= "200px">`,
`<img src="images/smashBros.jpg" alt="MW" class="images" width= "200px">`,
`<img src="images/waluigi.jpg" alt="MW" class="images" width= "200px">` ,
`<img src="images/fortnite.jpg" alt="MW" class="images" width= "200px">`,
`<img src="images/blackHole.jpg" alt="MW" class="images"width= "200px">`];


function generateQuestion() { 
    questionNum++;
    if(questionNum<QUESTIONS.length+2){
      return QUESTIONS[questionNum-1];
    }
    
    //next question replaces old one in the DOM.
    

}
function generateAnswer()   {
  answerNum++;
  if(answerNum<ANSWERS.length+2){
    
    return ANSWERS[answerNum-1];
  }
}
function scoreKeeper () {
  let corrAns = correctAnswer.group;
  console.log('corrAns: ', corrAns);
  console.log('currentAnswer: ', currentAnswer);
  // currentAnswer = getRadioVal('formA','answer');
      currentAnswer = $('input:checked');

    console.log('input checked: ', currentAnswer.val())
if(currentAnswer.val()==corrAns){
  score++;
  $('.score').html(`<h2>Score ` + score + `/5</h2>`);
  return true;
}
else if(currentAnswer.val()===undefined){
  alert("Ill let it slide, CHOOSE AN ANSWER!");
}
else{
  return false;
}
}
// function getRadioVal(form, name) {
//     let val;
//     // get list of radio buttons with specified name
//         console.log('form elements: ', form.elements,name)
//     let radios = form.elements[name];

//     // console.log(radios)
//     // loop through list of radio buttons
//     if (radios === undefined) return '';
//     for (let i=0, len = radios.length; i<len; i++) {
//         if ( radios[i].checked ) { // radio checked?
//             val = radios[i].value; // if so, hold its value in val
//             break; // and break out of for loop
//         }
//     }
//     console.log('get radio val: ', val);
//     return val; // return value of checked radio or undefined if none checked
// }


function generateAnswerString(item,index){
  //console.log(item,index);
  // <h3 id="answer${item.group}"> ${item.group} : ${item.name} </h3><input type="radio" name="answer"  value="${item.group}" >
  return `
  <Label class="polishedA">
  <input type="radio" name=" answer" value="${item.group}" required><span id="answer${item.group}"> ${item.group} : ${item.name} </span>
  </label>
  `;
}
function findCorrectAnswer(answerA,answerB,answerC,answerD){
  const answers = [answerA,answerB,answerC,answerD];
  for(let i = 0;i<answers.length;i++){
    let x = answers[i].checked;
    if(x==true){
      return answers[i];
    }
  }
}

//need map function
function renderAnswerQuestion (){
    const answerA = generateAnswer(ANSWERS);
    const answerB = generateAnswer(ANSWERS);
    const answerC = generateAnswer(ANSWERS);
    const answerD = generateAnswer(ANSWERS);
    correctAnswer = findCorrectAnswer(answerA,answerB,answerC,answerD);
    const quizQuestion = generateQuestion(QUESTIONS);
    let quizQuestionString = `<h2>${quizQuestion.name}</h2>`;
    //let quizAnswerA = generateAnswerString(answerA);
    //let quizAnswerB = generateAnswerString(answerB);
    //let quizAnswerC = generateAnswerString(answerC);
    //let quizAnswerD = generateAnswerString(answerD);
    let quizAnswerString = [answerA,answerB,answerC,answerD];
    let answerString = quizAnswerString.map((item,index) =>generateAnswerString(item,index));
    answerString = answerString.join("");
    $('.question').html(quizQuestionString);
    $('.answers').html(answerString);
    console.log(PICTURES[cPic],cPic);
    $('.pics').html(PICTURES[cPic]);
    document.getElementById("playButton").innerHTML="Submit";
    cPic++;
    //console.log("randerAnswerQuestion ran!"+quizQuestionString+answerString);
}




function handleNewSubmit() {
  let pageNum = 0;
  $('.formA').submit(function(event) {


    console.log("*****Page Number"+pageNum);
    
      event.preventDefault();
      console.log(currentAnswer);
      if(pageNum===11){
        console.log("leahgega");
        pageNum = 0;
        answerNum = 0;
        questionNum = 0;
        score = 0;
        cPic = 0;
        $('.score').html(`<h2>Score ` + 0 + `/5</h2>`);
      }
      if(pageNum===10){
        console.log(PICTURES[cPic],cPic);
    $('.pics').html(PICTURES[cPic]);
        pageNum++;
        $('.score').html(``);
        handleFinal();
        return;
      }
      if(pageNum===0){
        //upload first page of questions&answers
        pageNum++;
        renderAnswerQuestion();
        

      }
      
      else if(pageNum%2==0){
        console.log(PICTURES[cPic],cPic);
    $('.pics').html(PICTURES[cPic]);
    cPic++;
        pageNum++;
        renderAnswerQuestion();
        }
      
      else{
        console.log(PICTURES[cPic],cPic);
    
        pageNum++;
        console.log("scorekeepr ran");
        let corr = scoreKeeper();

        if(corr==true){
          console.log("correct ran");
            handleCorrect();
        }
        if(corr==false){
          console.log("Incorrect ran");
          handleIncorrect();
        }
      }
        
  })
}

function handleCorrect(){
  document.getElementById("playButton").innerHTML="Next";
  $('.answers').html(``);
  $('.question').html(`<h2>You are Correct!</h2>`);
  $('.pics').html(PICTURES[cPic]);
  cpic++;

//uploads correct screen and next submit calls renderAnswerQuestion. also updates score
}

function handleIncorrect(){
  document.getElementById("playButton").innerHTML="Next";
  $('.answers').html(``);
  $('.question').html(`<h2>You are Incorrect!</h2>`);
  $('.pics').html(PICTURES[cPic]);
  cpic++;
//uploads incorrect screen and next submit calls renderAnswerQuestion
}
function handleFinal(){
  // presents final screen and resets questionNum and AnswerNum to 0 if another submit is found
  console.log("handle final");
  document.getElementById("playButton").innerHTML="Play Again?";
  $('.question').html(`<h2>Lets see how you did...</h2>
  <h2>Score ` + score + `/5</h2>
  `);
  if(score<4){
  $('.answers').html(`<h2>Cant always play perfect...</h2>`);
  $('.pics').html(`<img src="images/incorrect.jpg" alt="wrong" class="images"/>`);
  }
  else{
    $('.answers').html(`<h2>Pop Off! Practice makes perfect...</h2>`);
    $('.pics').html(`<img src="images/correct.jpg" alt="right" class="images"/>`);
  }
  cpic++;

}
// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleQuiz() {

  handleNewSubmit();
  
  //findAnswer();
}

// when the page loads, call `handleShoppingList`
$(handleQuiz);