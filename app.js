var countvalue = document.querySelector('.counter-value')
var increasing = document.querySelector ('.incre-btn')
var decreasing = document.querySelector ('.decre-btn')
var reload = document.querySelector ('.reload-btn')

let a = 0;
function increment(){
    countvalue.textContent = a++
    countvalue.style.color =' green'
}
function decrement(){
    countvalue.textContent = a--
    countvalue.style.color = 'red'
}

reload.addEventListener('click' ,()=>{
    location.reload();

})