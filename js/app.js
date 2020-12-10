
//global event, it is an inline 
//(when user clicks on h1 element run the event)
let eventOne = document.getElementById("event1")
eventOne.addEventListener("click", function(eventDetails) {
    eventOne.style.color ="blue";
});


//attach keypress element to the page , return body element
//only reacts if specfic key is pressed (space key found in console code)
let eventTwo = document.getElementById("event2")
document.body.addEventListener("keypress", function(eventDetails) {
    if(eventDetails.code == "Space") {
        eventTwo.style.color = "purple";
    }
});



//changes color but must make second object in order to create 'hover' effect to go back black
let eventThree = document.getElementById("event3");
eventThree.addEventListener("mouseenter", function(eventDetails) {
    eventThree.style.color = "red";
})

//when leaves it turns back black
eventThree.addEventListener("mouseleave", function(eventDetails){
    eventThree.style.color = "black"
});