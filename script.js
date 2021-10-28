const btnStarbuckGreen = document.querySelector('.btn-starbuck-green')
const btnStarbuckPink = document.querySelector('.btn-starbuck-pink')
const btnStarbuckPurple = document.querySelector('.btn-starbuck-purple')
const starbuckGreen = document.querySelector('.starbuck-green')
const starbuckPink = document.querySelector('.starbuck-pink')
const starbuckPurple = document.querySelector('.starbuck-purple')

function AlternarPurple() {
    starbuckPurple.classList.add("active")
    starbuckPink.classList.remove("active")
    starbuckGreen.classList.remove("active")
}
btnStarbuckPurple.addEventListener("click", AlternarPurple)

function AlternarPink() {
    starbuckPurple.classList.remove("active")
    starbuckPink.classList.add("active")
    starbuckGreen.classList.remove("active")
}
btnStarbuckPink.addEventListener("click", AlternarPink)

function AlternarGreen() {
    starbuckPurple.classList.remove("active")
    starbuckPink.classList.remove("active")
    starbuckGreen.classList.add("active")
}
btnStarbuckGreen.addEventListener("click", AlternarGreen)

