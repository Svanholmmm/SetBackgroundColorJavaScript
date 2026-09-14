const colArray2 = [["red", "#ff0000"], ["green", "#00ff00"], ["yellow", "#ffff00"], ["purple", "#1f35a9"]]

const colorObjectsArray = [{"name": "red", "id": "#ff0000"}, {"name": "green", "id": "#00ff00"}, {
    "name": "yellow",
    "id": "#ffff00"
}, {"name": "purple", "id": "#1f35a9"}]

const ddColor2 = document.getElementById("ddColor2")
const pbFillDropdown2 = document.getElementById("pbFillDropdown2")

ddColor2.addEventListener('change', setBackgroundColor2)
pbFillDropdown2.addEventListener("click", addColors2)

const ddColorObjects = document.getElementById("colorObjects")
const fillDropDownObjects = document.getElementById("fillDropDownObjects")

ddColorObjects.addEventListener("change", setBackGroundColorObj)
fillDropDownObjects.addEventListener("click", addColorsObj)

function fillDropdown2(colorPair) {
    const el = document.createElement("option")
    el.textContent = colorPair[0]
    el.value = colorPair[1]
    ddColor2.appendChild(el)
}

function fillDropdownObj(item) {
    const el = document.createElement("option")
    el.textContent = item.name
    el.value = item.id
    el.colorItem = item
    ddColorObjects.appendChild(el);
}

function addColors2(btn) {
    ddColor2.innerHTML = ""
    colArray2.forEach(fillDropdown2);
}

function addColorsObj(btn) {
    ddColorObjects.innerHTML = ""
    colorObjectsArray.forEach(fillDropdownObj);
}

function setBackgroundColor2() {
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    const color = selectedOption.value
    document.body.style.backgroundColor = color
}

function setBackGroundColorObj() {
    const selindex = ddColorObjects.selectedIndex;
    const selectedOption = ddColorObjects.options[selindex];
    const color = selectedOption.colorItem.id
    document.body.style.backgroundColor = color
}