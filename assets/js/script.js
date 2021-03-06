const questions= [
    {
        Question: "What immense structure is referred to in Norse mythology as the Yggdrasil?",
        Options:['Upper Sacred Tree', 'Lower Sacred Tree','Central Sacred Tree' ],    
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        Question: "Nidhogg is a mythical creature from which mythological era?",
        Options: ['Norse','Greek','Polynesian','Roman'],    
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        Question: "Who is the daughter of King Minos?",
        Options: ['Hela','Helen','Mina','Ariadne'],
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        Question: "Which of the following Mesopotamin mythological figures was not a deity?",
        Options: ['Enlil','Sumer','Sin', 'Enko'] ,     
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "What was one of the elements of the chain that bound Fenrir made of?",
        Options: ['Breath of a fish','Scale of a snake','Tooth of a dragon','Skin of a siren'],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        Question: "Nefertum is the Egyptian goddes of what?",
        Options: ['Soap', 'Eyelashes', 'Hair', 'Perfume'],
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        Question: "The Graeve sisters lived in a can under a rock shaped like what?",
        Options:['A fish','A weasel','A star','A rabbit'],      
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "Where did Scylla, the six headed monster, live?",
        Options:['The Tyrrhenian Sea','The Messina Strait','The Indian Ocean','The Adriatic Sea'],      
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "From which part of the body was Amaterasu born?",
        Options:['Left eye','Right eye','Nose','Mouth'],      
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        Question: "Which group of people believed the world was created by a hare?",
        Options:['Powhatan','Pima','Sioux','Ojibwa'],      
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        Question: "What was Endymion's punishment for achievement immortality?",
        Options:['Eternal sleep','Eternal hunger','Eternal restlessness','Eternal happiness'],      
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        Question: "who is believed to have split heaven and earth in Sumerian mythology?",
        Options:['Ninmah','Gilgamesh','Enki','Enlil'],      
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        Question: "Who was the founder of Incan civilization?",
        Options:['Pizarro','Machu Pichu','Manco Capac','Cusco'],      
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        Question: "What did the Pima believe created the world?",
        Options:['A butterfly','A hare','A bird','A dog'],      
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "Who beheaded Medusa?",
        Options:['Andromeda','Perseus','Poseidon','Cetus'],      
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "Who ruled the Celtic Otherworld?",
        Options:['Badb','Arawn','Dagda','Brigid'],      
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "Who is the only god to be physically ugly?",
        Options:['Erebus','Hephaestus','Zeus','Dionysus'],      
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "The demi-god, Kamapua, was said to be half-man and half what?",
        Options:['Horse','Rat','Pig','Dog'],      
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        Question: "Who is known as one of the most evil Yokai?",
        Options:['Kappa','Bake-danuki','Tamamo no Mae','Kitsune'],      
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        Question: "Circe is the daughter of Helios",
        Options:['False', 'True'],      
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        Question: "Which mythological eras does the god Apollo come from?",
        Options:['Greek & Roman','Roman & Norse', 'Norse & Greek','Celtic & Norse' ],    
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        Question: "Baron Samedi is the voodoo god of the dead",
        Options:['True','False'],      
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        Question: "What was Atlas, the Olympian god, known as?",
        Options: ['Bearer of bad news','Bearer of heavens','Bearer of good news','Bearer of fear'],    
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        Question: "In Greek mythology, who is the godddess of wine?",
        Options: ['Dionysus','Artemis','Hermes','Demeter'],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        Question: "Who travelled to the underworld to save his wife, Eurydice?",
        Options: ['Troy','Minos','Orpheus', 'Theseus'] ,     
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        Question: "Who was the 'King of Gods' in Ancient Greek mythology?",
        Options: ['Hades','Poseidon','Odin','Zeus'],
        correctAnswer: 3,
        difficulty: "easy"
    },
    {
        Question: "Pandora had a box",
        Options: ['True', 'False'],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        Question: "Who led the Argonauts in search of the Golden Fleece?",
        Options:['John','Jason','Mark','Clive'],      
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        Question: "Which creature is said to be half man, half horse?",
        Options: ['Siren','Satyr','Centaur','Minotaur'],      
        correctAnswer: 2,
        difficulty: "easy"
    }, 
    {
        Question: "What did Medusa have for hair?",
        Options: ['Hair','Eels','Curls','Snakes'],
        correctAnswer: 3,
        difficulty: "easy"
    },
    {
        Question: "Which of these is Hera goddess of?",
        Options: ['Rivers','Fishing','Women','Children'],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        Question: "Nike is the Greek goddess of family",
        Options: ['True','False'],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        Question: "Cetus was sent to bring terror to Aethiopia",
        Options: ['True', 'False'],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        Question: "How did sirens lure sailors to their death?",
        Options:['Singing to them', 'Shouting hello', 'Prending to drown', 'Waving'],
        correctAnswer:0,
        difficulty: "easy"
    },
    {
        Question: "Valhalla is for anyone who dies",
        Options:['False', 'True'],      
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        Question: "What did Cronus do to his children?",
        Options:['Teach them','Love them','Abandon them','Eat them'],      
        correctAnswer:3,
        difficulty: "easy"
    },
    {
        Question: "Ragnarok is the world-ending battle between gods",
        Options:['True', 'False'],      
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        Question: "Who ruled the world before the Olympians?",
        Options:['No-one','Titans','Primordials','Immortals'],      
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        Question: "Which is not a preferred offering of the Hawaiian volcano Goddess?",
        Options:['Gin','Flowers','Food','Candles'],      
        correctAnswer: 3,
        difficulty: "easy"
    },
    {
        Question: "When one of the Learnean Hydra's twelve heads were chopped off, how many replaced it?",
        Options:['None','Two','Ten','Five'],      
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        Question: "What animal did Queen Pasiphae sleep with before she gave birth to the minotaur?",
        Options:['A white bull','A black cow', 'A golden ram','A brown goat' ],    
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        Question: "Maui is a god",
        Options:['True', 'False'],      
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        Question: "Who is the snake-like river god of Zambezi?",
        Options:['Orisha','Eshu','Anansi','Nyami Nyami'],      
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        Question: "Which of these is not a god or goddess in Norse mythology?",
        Options: ['Freya', 'Frigg', 'Balder', 'Brigid'],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        Question: "In Norse Mythology, what is the name of the serpent that eats the roots of the ash tree, Yggdrasil?",
        Options: ['Nidhogg', 'Drasil', 'Cantaun', 'Beowulf'],
        correctAnswer:0,
        difficulty: "medium"
    },
    {
        Question: "Hercules is from which mythological era?",
        Options: ['Greek', 'Egyptian', 'Roman', 'Celtic'],
        correctAnswer:2,
        difficulty: "medium"
    },
    {
        Question: "Who is the God of War in Polynesian mythology?",
        Options: ['Ares','Ku','Zeus','Kratos'],    
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        Question: "In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?",
        Options: ['Spider','Rabbit','Lizard','Dog'],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        Question: "In Greek mythology, who killed Achilles?",
        Options: ['Troy','Hera','Paris', 'Hermes'] ,     
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        Question: "Which of these Roman gods or goddesses doesn't have a Greek counterpart?",
        Options: ['Venus','Mars','Jupiter','Janus'],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        Question: "Hodur is blind",
        Options: ['True', 'False'],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        Question: "Hel was the daughter of which Norse god?",
        Options:['Odin','Loki','Thor','Tyr'],      
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        Question: "What are the names of the first humans in Norse mythology?",
        Options: ['Adam & Eve','Shu & Tefnut','Askr & Embla','Prometheus & Athena'],      
        correctAnswer: 2,
        difficulty: "medium"
    }, 
    {
        Question: "According to the Egyptian myth of Osiris, who murdered Osiris?",
        Options: ['Anubis','Mina','Sekmet','Seth'],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        Question: "Which of these is Hera goddess of?",
        Options: ['Rivers','Fishing','Women','Children'],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        Question: "Nike is the Greek goddess of family",
        Options: ['True','False'],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        Question: "In Chinese mythology, Changxi is the mother of what?",
        Options: ['Twelve moons', 'Twelve stars','Twelve planets','Twelve meteors'],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        Question: "Which of these is not a Hawaiian deity?",
        Options:['Pele','Laka','Lono','Maui'],      
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        Question: "Dagda is a Celtic god",
        Options:['True', 'False'],      
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        Question: "Sekmhet is the Egyptian goddess of war",
        Options:['True', 'False'],
        correctAnswer:0,
        difficulty: "medium"
    }
    ]

const updateQuestionNumber = document.getElementById('questionNumber');
const question=document.getElementById('question');
const answers=document.getElementById('answer-container');
const finalScore=document.getElementById('finalScore')
const easy=document.getElementById('easy');
const medium=document.getElementById('medium');
const hard=document.getElementById('hard');

let questionCounter=0;
let numberOfQuestions=15;
let currentQuestion;
let availableQuestions=[];
let availableAnswers=[];
let score=0;



const hardqs=questions.filter(function(question){
    return question.difficulty == 'hard'
}) //hard


const medqs=questions.filter(function(question){
    return question.difficulty == 'medium'
}) //medum


const easyqs=questions.filter(function(question){
    return question.difficulty == 'easy'
}) //easy










function checkStatus() {
    if (easy!==null) {
        easy.addEventListener('click', ()=> {
            setEasyQuestion()
        })
    }
     if (medium!==null) {
        medium.addEventListener('click', ()=> {
            setMedQuestion()
    })
    if (hard!==null) {
        hard.addEventListener('click', ()=> {
            setHardQuestion()
        })
    }
}

}
checkStatus()

function setEasyQuestion () {

   
    const allQuestions=easyqs.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(easyqs[i]);
        } 

        newQuestion()
}

function setMedQuestion () {

   
    const allQuestions=medqs.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(medqs[i]);
        } 

        newQuestion()
}

function setHardQuestion () {

   
    const allQuestions=hardqs.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(hardqs[i]);
        } 

        newQuestion()
}


function newQuestion () {

    if (questionCounter == numberOfQuestions){
        return window.location.assign('endgame.html')
    }
     
    const questionIndex=availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
    currentQuestion=questionIndex;
    question.innerHTML=currentQuestion.Question;
    const index=availableQuestions.indexOf(questionIndex)
    availableQuestions.splice(index, 1);


    const allOptions=currentQuestion.Options.length;
    for (let i=0; i<allOptions; i++){
        availableAnswers.push(i);
    }

    answers.innerHTML='';
    for(let i=0; i<allOptions; i++){
        const optionIndex=availableAnswers[Math.floor(Math.random()*availableAnswers.length)];
        
        const index2=availableAnswers.indexOf(optionIndex);
        availableAnswers.splice(index2,1);
        const option=document.createElement('div');
        option.innerHTML=currentQuestion.Options[optionIndex]; 
        option.id=optionIndex;
        option.className='btn';
        answers.appendChild(option);
        option.setAttribute('onclick', 'checkResult(this)');
    }
    

    questionCounter++;
    updateQuestionNumber.innerText = `${questionCounter} / ${numberOfQuestions}`;
}

function checkResult (element){
    const userAnswer=element.id;
    if (userAnswer==currentQuestion.correctAnswer){
        element.classList.add('correct')
        score++;
        localStorage.setItem('highscore',score)
        
    } 
    else {
        element.classList.add('incorrect')
    }
    
    setTimeout(function() {
        newQuestion()
    }, 900)
}
