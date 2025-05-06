const container = document.querySelector(".container")

let numberOfCells = 8;

let border = 2 // Size of the border in pixels
let margin = 4 // Size of the margin in pixels

console.log(innerWidth, innerHeight)

let height = (innerHeight - numberOfCells * 2 * border - numberOfCells * margin) / numberOfCells
let width = (innerWidth - numberOfCells * 2 * border - numberOfCells * margin) / numberOfCells
console.log(width, height)

let sizePercentage = Math.round(Math.min(width, height) / Math.min(innerWidth, innerHeight) * 100)
let size = Math.min(width, height)
console.log(size)

console.log(Math.min(innerHeight, innerWidth) - numberOfCells * size );

for (let i = 0 ; i < numberOfCells**2 ; i++) {
    const div = document.createElement("div");
    div.classList.toggle("child");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    })
    // div.style.flexBasis = `${sizePercentage}%`;
    div.style.height = `${size}px`
    div.style.width = `${size}px`
    container.appendChild(div);
}