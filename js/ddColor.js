const colArray = ["red", "green", "yellow", "blue", "orange"]

function addColors(btn) {
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown);
}

const ddColor = document.getElementById("ddColor")
ddColor.addEventListener('change', setBackgroundColor)

function fillDropdown(color) {
    const el = document.createElement("option")
    el.textContent = color
    ddColor.appendChild(el)
}

function setBackgroundColor() {
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    const color = selectedOption.innerText
    document.body.style.backgroundColor = color
}

const pbFillDropdown = document.getElementById("pbFillDropdown")
pbFillDropdown.addEventListener("click",addColors)