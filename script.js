const screen = document.querySelector('.screen');
const preview = document.querySelector('.preview');

const screenOne = document.querySelector('#screen-one').addEventListener('click', function (){
    screen.style.backgroundImage = 'url(./assignmentuber.png)'
    preview.style.display = 'none'
    screenOne.style.border = '10px solid black'
})
const screenTwo = document.querySelector('#screen-two').addEventListener('click', function (){
    screen.style.backgroundImage = 'url(./assignment.png)'
    preview.style.display = 'none'
    screenTwo.style.border = '10px solid black'
    console.log('clicked')
})
const screenThree = document.querySelector('#screen-three').addEventListener('click', function (){
    screen.style.backgroundImage = 'url(./gibsonport.png)'
    preview.style.display = 'none'
    screenThree.style.border = '10px solid black'
})
const screenFour = document.querySelector('#screen-four').addEventListener('click', function (){
    screen.style.backgroundImage = 'url(./lucent.png)'
    preview.style.display = 'none'
    screenFour.style.border = '10px solid black'
})
const screenFive = document.querySelector('#screen-five').addEventListener('click', function (){
    screen.style.backgroundImage = 'url(./gibson.png)'
    preview.style.display = 'none'
    screenFive.style.border = '10px solid black'
})
// for(i=0; i<screens.length; i++){
//   console.log(screens[i])  
// }