const quizData=[
{
    question: 'Founder of Pakistan:',
    a:'Quaid-e-Azam (R.A)',
    b:'Allama Muhammad Iqbal',
    c:'Jawahar-Lal Nehru',
    d:'Musa Khan',
    correct: 'a'
},
{
    question: 'Current Prime Minister of Pakistan:',
    a:'Zia-ul Haq',
    b:'Maryam Nawaz',
    c:'Nawaz Sharif',
    d:'Imran Khan',
    correct: 'c' 
},
{
    question: 'Who is the president of Pakistan?',
    a:'Florin Pop',
    b:'Donald Trump',
    c:'Arif Alvi',
    d:'Mihai Andrei',
    correct: 'c' 
},
{
    question: 'Black-day is observed in Pakistan on:',
    a:'18 March',
    b:'16 Dec',
    c:'14 Feb',
    d:'24 june',
    correct: 'b' 
},
{
    question: 'Pakistan came into being in:',
    a:'1996',
    b:'1995',
    c:'1994',
    d:'1947',
    correct: 'd' 
}
]

 const quiz= document.getElementById("quiz");
 const answerE1s= document.querySelectorAll(".answer");
 const questionE1= document.getElementById("question");
 const a_text=document.getElementById('a_text');
 const b_text=document.getElementById('b_text');
 const c_text=document.getElementById('c_text');
 const d_text=document.getElementById('d_text');
 const submitBtn= document.getElementById('submit')

let currentQuestion=0;
let score=0;

loadQuiz();
function loadQuiz()
{
    deselctAnswers();
    const currentQuizDate= quizData[currentQuestion];
    questionE1.innerHTML= currentQuizDate.question;
    a_text.innerText= currentQuizDate.a;
    b_text.innerText= currentQuizDate.b;
    c_text.innerText= currentQuizDate.c;
    d_text.innerText= currentQuizDate.d;
}

function getSelected()
{
    
    let answer= undefined;
    answerE1s.forEach((answerE1)=>
    {
        if(answerE1.checked)
        {
            answer= answerE1.id;
        }
    });
    return answer;
}

function deselctAnswers()
{
    answerE1s.forEach((answerE1)=>
    {
        answerE1.checked=false;
    });   
}

submitBtn.addEventListener('click', ()=>
{
    const answer= getSelected();
    if(answer)
    {
        if(answer && answer===quizData[currentQuestion].correct)
            score++;
        currentQuestion++;
    
        if(currentQuestion<quizData.length)
            loadQuiz();
        else
        {
            quiz.innerHTML= `<h2>You answere correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`
            
        }
    }

});