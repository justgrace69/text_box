//Get the target element
const duck = document.querySelector("#duck"),
    wrap = document.querySelector('#wrap');
let count = 0;

duck.addEventListener("click", () => {
    increaseScore();
    moveDuck();
});

//Increase score by 1
const increaseScore = () => {
    const score = document.querySelector("#score-counter");

    count ++;
    score.textContent = count;
};

//Move the duck randomly 
const moveDuck = () => {
    let wrapWidth = wrap.clientWidth;
    let wrapHeight = wrap.clientHeight;
  
    duck.style.left = Math.floor((Math.random() * wrapWidth - 70)) + "px";
    duck.style.top = Math.floor((Math.random() * wrapHeight - 70)) + "px";
};