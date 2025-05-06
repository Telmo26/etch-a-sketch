let numberOfCells = 16;
let border = 2 // Size of the border in pixels
let margin = 4 // Size of the margin in pixels
    

function createGrid() {
    const container = document.querySelector(".container")
    const rect = container.getBoundingClientRect()
    
    let containerWidth = rect.width
    let containerHeight = rect.height

    let height = (containerHeight - numberOfCells * 2 * border - numberOfCells * margin) / numberOfCells
    let width = (containerWidth - numberOfCells * 2 * border - numberOfCells * margin) / numberOfCells
    
    let size = Math.min(width, height)
    
    for (let i = 0 ; i < numberOfCells**2 ; i++) {
        const div = document.createElement("div");
        div.classList.toggle("child");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        })
        div.style.flexBasis = `${size}px`
        div.style.height = `${size}px`
        container.appendChild(div);
    }
}

function deleteGrid() {
    const children = document.querySelectorAll(".child")
    children.forEach((child) => child.remove())
}

const button = document.querySelector("button")
button.addEventListener("click", () => {
    numberOfCells = Number(prompt("Chose a grid size (<100): "))
    if (numberOfCells < 100) {
        deleteGrid()
        createGrid()
    } else {
        alert("Please choose a grid size under 100!")
    }

})

createGrid()