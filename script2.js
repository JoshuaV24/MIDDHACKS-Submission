function saveText(){
    var input = document.getElemenetById("userinput")
 }
/*
start function: takes in the converted word list, read speed, and an optional index
starts displaying words with a certain speed from a certain location in the word list
*/
const count = 0; 
var state = false;  
function start(words, speed, index=0){
    globalThis.aSpeed; /*find how to global*/ 
    aSpeed = speed;
    globalThis.file;
    file = words; 
    lWords = words; 
    timeBetweenWords = 60/aSpeed; 
    lActualWords = lWords.slice(index);
    for (let i = 0; i < lActualWords.length; i++) {
        setInterval(document.write(lWords),timeBetweenWords)
        count++;  
        clearInterval();
      };
};
///increase the display speed ny 50wpm
function increaseSpeed(){
    aSpeed = aSpeed + 50; 
    start(file, aSpeed, count)
}
function decreaseSpeed(){
    if(aSpeed == 50){
        start(file, 100, count)
    }
    aSpeed = aSpeed - 50; 
    start(file, aSpeed, count)
}

function stop(){
    start(file, 0.00000001, count); 
    state = !state;
}

function resume(){
    start(file, aSpeed, count-10);
    state = !state; 
}

function goBack(){
    start(file, aSpeed, count-10);
}

function fastForward(){
    start(file, aSpeed, count+10);
}

var myP = document.getElementById("space");
var myT = document.getElementById("word"); 

myT = addEventListner("keyup", event => {
    if (event.keycode ===65){
        decreaseSpeed()
    }
    if (event.keycode === 68){
        increaseSpeed()
    }
    if (event.keycode === 123){
        goBack()
    }
    if (event.keycode === 124){
        fastForward()
    }
})

myP.addEventListener("keyup", event => {
    if (state === true & KeyCode ===49){
        resume()
    }
    if (state === false & keyCode === 49){
        stop()
    }
});

