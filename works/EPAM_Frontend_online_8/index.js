/* START TASK 1: Your code goes here */
const table = document.querySelector('#task1 table');
const specialCell = document.querySelector('#task1 table .special-cell');
const tableCells = document.querySelectorAll('#task1 td');

for (let r = 0, n = table.rows.length; r < n; r++) {
    for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {
        table.rows[r].cells.item(c).style.backgroundColor='white';
    }
}

let len = table.rows.length;

for (let r = 0; r < len; r++) {
    for (let c = 0; c < table.rows[r].cells.length; c++) {
        if (table.rows[r].cells.item(c) === specialCell) {
            table.rows[r].cells.item(c).addEventListener('click', function(){
                tableCells.forEach(function(element) {
                    if(element.style.backgroundColor === 'white'){
                        element.style.backgroundColor = 'green';
                    }
                })
            });
            continue;
        }
        if (c===0){
            table.rows[r].cells.item(c).addEventListener('click', function () {
                for (let i = 0; i < table.rows[r].cells.length; i++) {
                    let colorEl = table.rows[r].cells.item(i).style.backgroundColor;
                    if (colorEl === 'white'||colorEl === 'green'){
                        table.rows[r].cells.item(i).style.backgroundColor = 'blue';
                    }
                }
            });
            continue;
        } else {
            table.rows[r].cells.item(c).addEventListener('click', function () {
                table.rows[r].cells.item(c).style.backgroundColor = 'yellow';
            });
        }
    }
}

/* END TASK 1 */

/* START TASK 2: Your code goes here */
let validationMessage = document.querySelector('.validation');
let input = document.querySelector('input[type=text]');
let button = document.querySelector('input[type=submit]');
button.disabled = true;
input.oninput = function () {
    if(!input.value.match(/^(\+380)+([\d]{9})/g)){
        validationMessage.style.visibility = 'visible';
        input.style.borderColor = 'red';
        validationMessage.innerHTML = 'Type number does not follow format + 380 *********';
        validationMessage.classList.remove('success');
        button.disabled = true;
    } else {
        validationMessage.classList.add('success');
        validationMessage.innerHTML = 'Validation passed &#128076;';
        button.disabled = false;
        input.style.borderColor = 'black';
    }
};
button.onclick = function (){
    validationMessage.innerText = 'Data successfully send';
};
/* END TASK 2 */

/* START TASK 3: Your code goes here */
let basketField = document.querySelector('.field');
let basketFieldX = basketField.getBoundingClientRect().x + window.scrollX;
let basketFieldY = basketField.getBoundingClientRect().y + window.scrollY;
let ball = document.querySelector('.ball');
let score = document.querySelector('.scoreboard');
let teamA = document.querySelector('.team-a');
let teamB = document.querySelector('.team-b');
let goal = document.querySelector('.goal');
let scoreA = 0;
let scoreB = 0;
const styleBall = getComputedStyle(ball);
let noMagic2 = 2;
let noMagic10 = 10;
let noMagic539 = 539;
let noMagic553 = 553;
let noMagic139 = 139;
let noMagic153 = 153;
let noMagic9 = 9; 
let noMagic23 = 23;
let noMagic3000 = 3000;

basketField.addEventListener('click', function kickBall() {
    let x = event.pageX - basketFieldX - parseInt(styleBall.width, noMagic10) / noMagic2;
    let y = event.pageY - basketFieldY - parseInt(styleBall.height, noMagic10) / noMagic2;
    if (x > noMagic539 && x < noMagic553 && y > noMagic139 && y < noMagic153) {
        basketField.removeEventListener('click', kickBall);
        goal.style.color = 'blue';
        goal.innerText = 'Team A score!';
        scoreA++;
        teamA.innerText = 'Team A:' + scoreA;
        goal.style.visibility = 'visible';
        setTimeout(function () {
            basketField.addEventListener('click', kickBall);
            goal.style.visibility = 'hidden';
        }, noMagic3000);
    }
    if (x > noMagic9 && x < noMagic23 && y > noMagic139 && y < noMagic153) {
        basketField.removeEventListener('click', kickBall);
        goal.style.color = 'red';
        goal.innerText = 'Team B score!';
        scoreB++;
        teamB.innerText = 'Team B:' + scoreB;
        goal.style.visibility = 'visible';
        setTimeout(function () {
            basketField.addEventListener('click', kickBall);
            goal.style.visibility = 'hidden';
        }, noMagic3000);
    }
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
})


/* END TASK 3 */