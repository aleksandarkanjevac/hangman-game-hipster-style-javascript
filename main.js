
(function () {
var tipovi = {
    maleNames: ['dragan', 'uroš', 'jovan', 'svetozar', 'radoslav', 'milan', 'gvozden', 'andrej', 'mihajlo', 'petar', 'pavle', 'luka', 'steva', 'dušan', 'bogdan', 'božidar', 'miloš', 'nemanja', 'rastko', 'gojko'],
    femaleNames: ['milka', 'mila', 'sanja', 'iva', 'petra', 'darja', 'ana', 'marija', 'suzana', 'danica', 'petrija', 'mihaila', 'stanka', 'milica', 'hana', 'jelica', 'mirjana', 'ljubica', 'anita', 'biljana'],
    animals: ['konj', 'krava', 'majmun', 'žirafa', 'medved', 'pas', 'tigar', 'lisica', 'slon', 'leopard', 'antilopa', 'nosorog', 'dabar', 'pingvin', 'tvor', 'šakal', 'kamila', 'lama', 'divokoza', 'zebra'],
    cities: ['pariz', 'lisabon', 'kairo', 'minhen', 'madrid', 'solun', 'sofija', 'skadar', 'rim', 'moskva', 'kijev', 'prag', 'ženeva', 'čačak', 'maribor', 'segedin', 'brno', 'london', 'oslo', 'amsterdam']
}

//variables
var score=0;
var points = document.getElementById("points");
var elguess = document.getElementById("guess");
var word;
var word1;
var i = 0;
var message=document.getElementById("message");
var elLetter = document.getElementById("letter");
var elDash = document.getElementById("dash");
var elUsedletters = document.getElementById("letters");
var hidden = document.getElementById("hidden8");
var howtoplay = document.getElementById("howtoplay");
var attempts = 8;
var hits = 0;
var node = [];


//buttons for calling functions
for(j=1;j<=4;j++){
   document.getElementById('btn'+j).addEventListener("click", randomWord);
}
document.getElementById("submitLetter").addEventListener("click", wordProcessing);




//take a word from object,split it and makes dashes and puts dashes into HTML

function randomWord() {
    elLetter.focus();
    howtoplay.style.visibility = "hidden";
    howtoplay.style.display="none";
    points.style.display="inline";
    elDash.style.display="inline";
    var x = this.getAttribute("data-types");
    word = tipovi[x][Math.floor(Math.random() * tipovi[x].length)];
    word1 = word.split("");
    for (i = 0; i < word1.length; i++)
        word1[i] = "_";
    elDash.innerHTML = word1.join(" ");

    for(j=1;j<=4;j++){//disable all choose category buttons
    document.getElementById('btn'+j).removeEventListener("click", randomWord);
    }
    return word;



}

//processes input letter - checks if thre letter exist into the given word 

function wordProcessing() {
//checks if the letter has allready been input



for(a=0;a<node.length;a++){
    if(node[a]!==elLetter.value){

    }else{
       
        alert("Uneli ste vec to slovo!!!!");
         elLetter.focus();
         elLetter.value = '';
        return;
    }
}
 //adds used letters into html div
    
    node.push(elLetter.value);
    elUsedletters.innerHTML = node.join(" ").toUpperCase();

    // checks a letter input by a user
   
    var flag = 0; // 0 -when the letter is not guessed, 1 - when thre letter is guessed
    for (i = 0; i < word.length; i++) {
        if (word[i] === elLetter.value) {
            word1[i] = word[i];

            flag = 1;
            hits++;
            score+=2;
            points.innerHTML ="Points: " + score;

        }
    }

    if (flag === 1) {
        elDash.innerHTML = word1.join(" ").toUpperCase();
    } else {
        attempts--;

        //shows beard photos and nuber of attempts 

        hidden.setAttribute('src', "IMG/h" + attempts + ".png");
        hidden.style.visibility = "visible";
    }

    elLetter.value = ''; //errases input field
    elLetter.focus(); //puts fokus into input field

    accuracyAttempts();
}
//the function checks number of guessed and missed letters


function accuracyAttempts() {

    if (hits == word.length) {
    

elguess.style.visibility = "visible";

    
    }

    if (attempts === 1) {
      
     

    message.innerHTML = "Sorry hipster, you didn't keep your beard." + "The correct answer is " + word.toUpperCase()+"!!" + " Better luck next time!";

      elguess.style.visibility = "visible";  

        

    }


}
}());
