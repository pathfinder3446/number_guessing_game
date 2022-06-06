
// Pseudocode :
// prompt guessNumber
// Math.random
// counter = 5 live
// descending counter, live -= 1
// if guessNumber > randomNumber, down
// if guessNumber < randomNumber, up
// else, congrats!!
// if counter > 0, prompt guessNumber
// else, game over
let guessNumber = document.querySelector('.guess-number');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
let attempt = document.querySelector('.attempts');
let scale = document.querySelector(`.scale`);
let tahmin;
const randomNumber = Math.floor(Math.random() * 100 + 1);
let reBtn = document.querySelector('.reBtn');
console.log(randomNumber);
let live = 5;
let min = 1;
let max = 100;

console.log(scale);



btn.addEventListener(`click`, () => {
    tahmin = guessNumber.value;
    console.log(tahmin);
    
    live --;

    if (tahmin == randomNumber) {
        console.log(`Congrats!!  🥂 Your ${5 - live}th try.`);
        result.innerText = `Congrats!!  🥂 Your ${5 - live}th try.`;
        result.style.color = `green`;
        btn.disabled = true;
        
    }
        
       
     else {
        console.log(`Be careful! You have only ${live} lives!!`) // template literal backtick li kullanım, react ta çok kullanışlı
        result.innerText = `Be careful! You have only ${live} lives!!`;
        result.style.color = `gray`

        
        attempt.innerHTML = Number(attempt.innerHTML)+1;
       
        console.log(guessNumber.value);

        if (tahmin > randomNumber) {
            
            max = tahmin;
            scale.innerHTML = `down ⬇  Correct answer is between ${min} and ${tahmin}`;
           
        }
        else if (tahmin < randomNumber) {
            min = tahmin;
            scale.innerHTML = `up ⬆  Correct answer is between ${tahmin} and ${max}`;
        }
    }

if (Number(attempt.innerHTML) > 5){
    attempt.style.display = `none`;
}

if (live === 0 && tahmin != randomNumber) {
    console.log("Sorry, game over! 😔");
    result.innerText = `"Sorry, game over! 😔"`;
    btn.disabled = true;

}

console.log("See you next time 😁");

guessNumber.value = ``;

})

window.addEventListener("load", (event) => {
    reBtn.onclick = function () {
      location.reload(true);
    };
  });



           




// pseudocode:
// get id ile atama
// addeventlistener ile
// arrow function
// innerHTML, innerText vs ile yazdır
// click ten sonra kıyas yapcak