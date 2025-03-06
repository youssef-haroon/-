const btn1 = document.querySelector('.b1');
const modal1 = document.querySelector('.modal1');
const btn3 = document.querySelector('.b3');
const modal3 = document.querySelector('.modal3');
const btn4 = document.querySelector('.b4');
const modal4 = document.querySelector('.modal4');
const closeButtons = document.querySelectorAll('.close-btn');


btn1.onclick = function() {
    modal1.classList.add('open-modal');
}

btn3.onclick = function() {
    modal3.classList.add('open-modal');
   
}
btn4.onclick = function() {
    modal4.classList.add('open-modal');
   
}

for(let i=0; i<closeButtons.length; i++){
    closeButtons[i].onclick = function() {
        modal1.classList.remove('open-modal');
        modal3.classList.remove('open-modal');
        modal4.classList.remove('open-modal');
    }
}