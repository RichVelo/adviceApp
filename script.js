const url = 'https://api.adviceslip.com/advice'
let adviceString = document.querySelector("#advice-string")
let adviceNumber = document.querySelector("#advice-num")
let adviceButton = document.querySelector("#new-advice-button")

async function fetchAdvice() {
    let greatAdvice = await fetch(url, {cache: 'no-cache'})
    let adviceJSON = await greatAdvice.json()
    let {id, advice} = adviceJSON.slip

    displayNewAdvice(advice)
    displayAdviceNum(id)
}

function displayNewAdvice(advice) {
    adviceString.textContent = '"' + advice + '"'
}

function displayAdviceNum(id) {
    adviceNumber.textContent = 'Advice #' + id
}

adviceButton.addEventListener('click',  fetchAdvice )

fetchAdvice()