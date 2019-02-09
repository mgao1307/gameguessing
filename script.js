let targetNum = Math.floor((Math.random()*100)+1)

function checkResult(){
    let resultDisplay = document.getElementById('result')
    let guess = parseInt(document.getElementById('number').value);
    console.log(guess,targetNum)
    
    if (guess == targetNum){
        console.log("You Got It");
        resultDisplay.style.color= "#488543";
        resultDisplay.innerHTML= "You Got it!";
        
    }
    else if (guess > targetNum){
        console.log("Too High Try Again");
        resultDisplay.style.color= "#d9534f";
        resultDisplay.innerHTML= "Too High Try Again:(";
    }
    else if (guess < targetNum){
        console.log("Too Low");
        resultDisplay.style.color= "#ADFF2F";
        resultDisplay.innerHTML= "Too Low Try Again:(";
    }


}



