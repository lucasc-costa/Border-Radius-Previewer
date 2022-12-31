const rightUp = document.getElementById("right-up")
const leftUp = document.getElementById("left-up")
const rightDown = document.getElementById("right-down")
const leftDown = document.getElementById("left-down")

const border = document.getElementById("border")
const code = document.getElementById("code")

rightUp.addEventListener("change", () => turningEdge())
leftUp.addEventListener("change", () => turningEdge())
rightDown.addEventListener("change", () => turningEdge())
leftDown.addEventListener("change", () => turningEdge())

function turningEdge() {
    border.style.borderRadius =  leftUp.value + "%" + rightUp.value + "%" + rightDown.value + "%" + leftDown.value + "%"
    code.innerHTML = "border-radius:"+ window.getComputedStyle(border).borderRadius
}

function changeCode() {
    code.innerHTML = "border-radius:"+ window.getComputedStyle(border).borderRadius
}