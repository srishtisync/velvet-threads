var first = document.querySelector('.dressOne')
var second = document.querySelector('.dressTwo')
var third = document.querySelector('.dressThree')
var forth = document.querySelector('.dressFour')
var five = document.querySelector('.dressFive')
var six = document.querySelector('.dressSix')
var seven = document.querySelector('.dressSeven')
var description = 'for women of good taste.    '
var i = 0
var speed = 300
var arr = [seven, six, second, third, forth, five, first]
var counter = 0
setInterval(myFunction, 3000)
function myFunction () {
  arr[counter].style.display = 'none'
  counter++
  if (counter === arr.length) { counter = 0 }
  arr[counter].style.display = 'block'
}
function describe () {
  if (i < description.length) {
    document.querySelector('.describe').innerHTML += description.charAt(i)
    i++
    if (i === description.length) {
      i = 0
      document.querySelector('.describe').innerHTML = ''
    }
    setTimeout(describe, speed)
  }
}
describe()
