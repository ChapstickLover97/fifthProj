// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function updateTime() {
  document.getElementById("time").innerHTML = dayjs().format('dddd, MMMM D - hh:mm:ss');
}
  setInterval(updateTime, 1000);

// function updateColors() {
//   console.log(dayjs().hour())
//   document.getElementById("hour-8");
//   let hour_8 = document.getElementById("hour-8");
//   if(dayjs().hour() === 8) {
//     hour_8.classList.add("present");
//   } else if(dayjs().hour() > 8){
//     hour_8.classList.add("past");
//   }
//     else{
//     hour_8.classList.add("future");
//   }
// }  

// updateColors()
let hourBlockEl = document.querySelectorAll(".time-block");

let currentHour = dayjs().hour()

for(let i = 0; i < hourBlockEl.length; i++){
  console.log(hourBlockEl[i].id);
  let hourBlock = hourBlockEl[i].id;
  if(hourBlock < currentHour){
    hourBlockEl[i].classList.add("past")
  }else if(hourBlock == currentHour){
    hourBlockEl[i].classList.add("present")
  }else{
    hourBlockEl[i].classList.add("future");
  }
}


const inputEight = document.getElementById("textHourEight");
const inputNine = document.getElementById("textHourNine");
const inputTen = document.getElementById("textHourTen");
const inputEleven = document.getElementById("textHourEleven");
const inputTwelve = document.getElementById("textHourTwelve");
const inputThirteen = document.getElementById("textHourThirteen");
const inputFourteen = document.getElementById("textHourFourteen");
const inputFifteen = document.getElementById("textHourFifteen");
const inputSixteen = document.getElementById("textHourSixteen");
const inputSeventeen = document.getElementById("textHourSeventeen");

inputEight.addEventListener("keyup", function(){
  localStorage.setItem("inputEight", inputEight.value);
})
inputNine.addEventListener("keyup", function(){
  localStorage.setItem("inputNine", inputNine.value);
})
inputTen.addEventListener("keyup", function(){
  localStorage.setItem("inputTen", inputTen.value);
})
inputEleven.addEventListener("keyup", function(){
  localStorage.setItem("inputEleven", inputEleven.value);
})
inputTwelve.addEventListener("keyup", function(){
  localStorage.setItem("inputTwelve", inputTwelve.value);
})
inputThirteen.addEventListener("keyup", function(){
  localStorage.setItem("inputThirteen", inputThirteen.value);
})
inputFourteen.addEventListener("keyup", function(){
  localStorage.setItem("inputFourteen", inputFourteen.value);
})
inputFifteen.addEventListener("keyup", function(){
  localStorage.setItem("inputFifteen", inputFifteen.value);
})
inputSixteen.addEventListener("keyup", function(){
  localStorage.setItem("inputSixteen", inputSixteen.value);
})
inputSeventeen.addEventListener("keyup", function(){
  localStorage.setItem("inputSeventeen", inputSeventeen.value)
})

window.onload = function(){
  const storedFirstValue = localStorage.getItem("inputEight");
  const storedSecondValue = localStorage.getItem("inputNine");
  const storedThirdValue = localStorage.getItem("inputTen");
  const storedFourthValue = localStorage.getItem("inputEleven");
  const storedFifthValue = localStorage.getItem("inputTwelve");
  const storedSixthValue = localStorage.getItem("inputThirteen");
  const storedSeventhValue = localStorage.getItem("inputFourteen");
  const storedEighthValue = localStorage.getItem("inputFifteen");
  const storedNinthValue = localStorage.getItem("inputSixteen");
  const storedTenthValue = localStorage.getItem("inputSeventeen");
  if(storedFirstValue){
    inputEight.value = storedFirstValue;
  } 
  if(storedSecondValue){
    inputNine.value = storedSecondValue;
  }
  if(storedThirdValue){
    inputTen.value = storedThirdValue
  }
  if(storedFourthValue){
    inputEleven.value = storedFourthValue
  }
  if(storedFifthValue){
    inputTwelve.value = storedFifthValue
  }
  if(storedSixthValue){
    inputThirteen.value = storedSixthValue
  }
  if(storedSeventhValue){
    inputFourteen.value = storedSeventhValue
  }
  if(storedEighthValue){
    inputFifteen.value = storedEighthValue
  }
  if(storedNinthValue){
    inputSixteen.value = storedNinthValue
  }
  if(storedTenthValue){
    inputSeventeen.value = storedTenthValue
  }

  

  

 

  








  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
}
