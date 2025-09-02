const container = document.querySelector("#container");
const button = document.querySelector("#new");

function grid(size) {
    const squareSize = 500 / size;
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;

        grid.dataset.darkness = 0;

        grid.addEventListener("mouseover", () => {
           let level = parseInt(grid.dataset.darkness);
           if (level < 10) {
            level++;
            grid.dataset.darkness  = level;
            grid.style.backgroundColor = `rgba(255, 0, 0, ${level / 10})`;
           }
        });

        container.appendChild(grid)
        
    }
}
grid(16);

button.addEventListener("click", () => {
    let size = parseInt(prompt("How many squares do you want? (1-100):"));
    if (size > 0 && size <= 100) {
        container.innerHTML = "";
        grid(size);
    } else{
        alert("Please enter a number between 1 and 100.");
    }
});
