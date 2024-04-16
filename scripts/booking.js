/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let monday = document.getElementById('monday')
let tuesday = document.getElementById('tuesday')
let wednesday = document.getElementById('wednesday')
let thursday = document.getElementById('thursday')
let friday = document.getElementById('friday')
let numDays = 0

let fullDay = document.getElementById('full')
let halfDay = document.getElementById('half')
let clearButton = document.getElementById('clear-button')

let calcCost = document.getElementById('calculated-cost')


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener('click', () => updateDay(1))
tuesday.addEventListener('click', () => updateDay(2))
wednesday.addEventListener('click', () => updateDay(3))
thursday.addEventListener('click', () => updateDay(4))
friday.addEventListener('click', () => updateDay(5))

function updateDay(day){
    console.log("Update Day Run");
    switch(day){
        case 1:
            if(monday.classList.contains("clicked")){
                monday.classList.remove('clicked');
                numDays -= 1;
            } else {
                monday.classList.add('clicked');
                numDays += 1;
            }
            calculate()
            break
        case 2:
            if(tuesday.classList.contains("clicked")){
                tuesday.classList.remove('clicked');
                numDays -= 1;
            } else {
                tuesday.classList.add('clicked');
                numDays += 1;
            }
            calculate()
            break
        case 3:
            if(wednesday.classList.contains("clicked")){
                wednesday.classList.remove('clicked');
                numDays -= 1;
            } else {
                wednesday.classList.add('clicked');
                numDays += 1;
            }
            calculate()
            break
        case 4:
            if(thursday.classList.contains('clicked')){
                thursday.classList.remove('clicked');
                numDays -= 1;
            } else {
                thursday.classList.add('clicked');
                numDays += 1;
            }
            calculate()
            break
        case 5:
            if(friday.classList.contains('clicked')){
                friday.classList.remove('clicked');
                numDays -= 1;
            } else {
                friday.classList.add('clicked');
                numDays += 1;
            }
            calculate()
            break
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', clear)

function clear(){
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    numDays = 0;
    calculate()
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener('click', setHalf)

function setHalf(){
    fullDay.classList.remove('clicked')
    halfDay.classList.add('clicked')
    calculate()
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDay.addEventListener('click', setFull)

function setFull(){
    fullDay.classList.add('clicked')
    halfDay.classList.remove('clicked')
    calculate()
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    if(fullDay.classList.contains('clicked')){
        dayRate = 35;
    } else {
        dayRate = 20
    }

    calcCost.innerHTML = dayRate * numDays
}


