/** Assigning variables to html elements */
let popAx = document.getElementById("popularity1")
let popAu = document.getElementById("popularity2")
let popBe = document.getElementById("popularity3")
let popFo = document.getElementById("popularity4")
let popSu = document.getElementById("popularity5")
let popBm = document.getElementById("popularity6")

/** clearing the user's input after clicking the search button */
let Input_ = document.querySelector("#search-input")
const button_ = document.querySelector("#search-button")
 
 
button_.addEventListener("click", function(){
    Input_.value = ""
})


/** The rating array*/
const rating = ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"]
 
 /** The onclick functions */
function popularity1(){

    popAx.textContent = "Rating: "+ rating[4]

}

function popularity2(){

    popAu.textContent = "Rating: "+ rating[3]

}

function popularity3(){

    popBe.textContent = "Rating: "+ rating[1]

}

function popularity4(){

    popFo.textContent = "Rating: "+ rating[2]

}
function popularity5(){

    popSu.textContent = "Rating: "+ rating[4]

}
function popularity6(){

    popBm.textContent = "Rating: "+ rating[3]

}
/** Making the rating display disappear on double clicking the 'popularity' button*/
function depop1(){
    popAx.textContent =  " "
}
function depop2(){
    popAu.textContent =  " "
}
function depop3(){
    popBe.textContent =  " "
}
function depop4(){
    popFo.textContent =  " "
}
function depop5(){
    popSu.textContent =  " "
}
function depop6(){
    popBm.textContent =  " "
}
