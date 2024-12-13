// prompt("what is your name");
// prompt("girl/boy Friend ka naam");
// var lovescore  = Math.random() *100;
// lovescore = Math.floor(lovescore) + 1;
// if (lovescore >= 70) {
//     alert("Your lovescore is " + lovescore + " % - You both love each other");
// } 
// else if (lovescore > 30 && lovescore < 70) {
//     alert("Your lovescore is " + lovescore + " % - You both have a crush on each other");
// }
// else {
//     alert("Your lovescore is " + lovescore + " % - I am joking your lovescore is 89.965788947");
// } 

function generateLoveScore() {
    // Logic to calculate love score (you can replace this with your own algorithm)
    let loveScore = Math.floor(Math.random() * 11) + 80 ; // Generates a random love score between 0 and 100
    return loveScore;
}

function displayLoveScore() {
    let boyName = document.getElementById("boyName").value;
    let girlName = document.getElementById("girlName").value;
    let loveScoreDisplay = document.getElementById("loveScore");

    if (boyName && girlName) {
        let loveScore = generateLoveScore();
        loveScoreDisplay.textContent = `Love Score for ${boyName} and ${girlName}: ${loveScore}% ` ;
        if (loveScore >= 90) {
            loveScoreDisplay.innerHTML += "<br><br>Wow! You're Made for Each-Other!";
        } else if (loveScore >= 80 && loveScore <90) {
            loveScoreDisplay.innerHTML += "<br><br>Great chemistry! Keep it up!";
        } else if (loveScore >= 70 && loveScore <80) {
            loveScoreDisplay.innerHTML += "<br><br>You're doing well. Keep nurturing your love!";
        } else if (loveScore >= 60 && loveScore  <70)  {
            loveScoreDisplay.innerHTML += "<br><br>Good connection! Continue building your love story";
        } else if (loveScore >=50 && loveScore <60 ) {
            loveScoreDisplay.innerHTML += "<br><br>Not bad! There's room for improvement.";
        } else {
            loveScoreDisplay.innerHTML += "<br><br>Hmm, work on building a stronger connection.";
        }
    } else {
        loveScoreDisplay.textContent = "Please enter both names to calculate the Love Score.";
    } 
    
}

document.getElementById("submitBtn").addEventListener("click", displayLoveScore);
