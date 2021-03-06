const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions;
let correctAnswers = ["Sally Ride","true","40","Trajectory",	"3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //

let userName = input.question('May I have your name? ');
console.log('Candidate Name: ' + userName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 let questionsArray = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?]", "What is the minimum crew size for the ISS?"]

for (let i = 0; i < questionsArray.length; i++){
  let question = questionsArray[i]
  let expectedAnswer = correctAnswers[i]
  let answer = input.question("" + (i+1) + ") " + question + "\n" + "Your Answer: ");
  candidateAnswers.push(answer);
  console.log("Correct Answer: " + expectedAnswer + "\n");
    

}


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;
  let numberCorrect = 0; 
  for (let i = 0; i < correctAnswers.length; i++){
if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
numberCorrect = numberCorrect + 1

}
  }

  grade = (numberCorrect / correctAnswers.length) * 100

  console.log(`>>> Overall Grade: ${grade}% (${numberCorrect} of ${correctAnswers.length} responses correct) <<<
`)
if (grade < 80){
 console.log(">>> Status: FAILED <<<")
}
else {
console.log(">>> Status: PASSED <<<")
}
  return grade;

}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
