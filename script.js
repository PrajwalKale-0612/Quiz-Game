
const questions = [
  {
    question: "Q1) Which language is used for styling web pages?",
    options: ["A) HTML", "B) JQuery", "C) CSS", "XML"],
    answer: 2
  },
  {
    question: "Q2) Which is not a JavaScript Framework?",
    options: ["A) Python Script", "B) JQuery", "C) Django", "D) NodeJS"],
    answer: 2
  },
  {
    question: "Q3) Which is used for Connect To Database?",
    options: ["A) PHP", "B) HTML", "C) JS", "D) CSS"],
    answer: 0
  },
  {
    question: "Q4) Inside which HTML element do we put the JavaScript?",
    options: ["A) <script>", "B) <js>", "C) <javascript>", "D) <code>"],
    answer: 0
  },
  {
    question: "Q5) Which keyword is used to inherit a class in Java?",
    options: ["A) implements", "B) extends", "C) super", "D) inherits"],
    answer: 1
  },
  {
    question: "Q6) Which tag is used to create a hyperlink in HTML?",
    options: ["A) <link>","B) <a>","C) <href>","D) <hyper></hyper>"],
    answer: 1
  },
  {
    question: "Q7) Which data structure works on FIFO principle?",
    options: ["A) Stack","B) Array","C) Tree","D) Queue"],
    answer: 3
  },
  {
    question: "Q8) What will be the output of the following Python code? \n print(2 ** 3)",
    options: ["A) 6","B) 222","C) 8","D) error"],
    answer: 2
  },
  {
    question: "Q9) What is the size of int in C (generally)?",
    options: ["A) 2 bytes","B) 4 bytes","C) 8 bytes","D) Depends on compiler"],
    answer: 3
  },
  {
    question: 'Q10) What will be the output of the following C code ? \n int a = 10; \n printf("%d", ++a);',
    options: ["A) 10","B) 11","C) 9","D) error"],
    answer: 1
  },
  {
    question: "Q11) Which method is the entry point of a Java program?",
    options: ["A) start()","B) run()","C) main()","D) Main()"],
    answer: 2
  },
  {
    question: "Q12) Which concept allows one class to acquire properties of another class?",
    options: ["A) Polymorphism","B) Encapsulation","C) Inheritance","D) Abstraction"],
    answer: 2
  },
  {
    question: "Q13) What is the output of: \n print(type(5))",
    options: ["A) <class 'int'>","B) int","C) integer","D) number"],
    answer: 0
  },
  {
    question: "Q14) Which data structure uses LIFO principle?",
    options: ["A) Array","B) Queue","C) Stack","D) Linked List"],
    answer: 2
  },
  {
    question: "Q15) Which SQL command is used to remove all records from a table?",
    options: ["A) DELETE","B) DROP","C) REMOVE","D) CLEAR"],
    answer: 0
  },
  {
    question: "Q16) Which symbol is used for single-line comments in JavaScript?",
    options: ["A) <!-- -->","B) #","C) //","D) /* */"],
    answer: 2
  },
  {
    question: "Q17) What is the time complexity of Binary Search?",
    options: ["A) O(n)","B) O(n²)","C) O(log n)","D) O(1)"],
    answer: 2
  },
  {
    question: 'Q18) Output of the following code : \n #include<stdio.h> \n int main() { \n int a = 3, b = 2; \n printf("%d", a % b); \nreturn 0; }',
    options: ["A) 1","B) 2","C) 0","D) error"],
    answer: 0
},
  {
    question: "Q19) Which keyword is used to prevent method overriding in Java?",
    options: ["A) static","B) final","C) const","D) super"],
    answer: 1
  },
  {
    question: "Q20) Which data structure is used for implementing recursion?",
    options: ["A) Stack","B) Queue","C) Tree","D) Graph"],
    answer: 0
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  const q = questions[current];
  questionEl.innerText = q.question;

  optionsEl.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

optionsEl.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const correctIndex = questions[current].answer;

    optionsEl.forEach(b => b.disabled = true);

    if (index === correctIndex) {
      score++;
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
      optionsEl[correctIndex].classList.add("correct");
    }
  });
});

nextBtn.addEventListener("click", () => {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreEl.innerText = score + " / " + questions.length;
  }
});


function submitQuiz() {
    window.location.href = "result.html?score=" + score;
}



restartBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  loadQuestion();
});

loadQuestion();