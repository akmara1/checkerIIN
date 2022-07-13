const input = document.querySelector("input")
const button = document.querySelector("button")
const result = document.querySelector(".result")

const regExp = /^[10]\d{13}$/

button.addEventListener("click", () => {
    if(regExp.test(input.value)){
        result.innerHTML = "ok"
        result.style.color = "green"
    }else{
        result.innerHTML = "NOT ok"
        result.style.color = "red"
    }
})


