document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    document.querySelector("#button").addEventListener("click", () => {
    let input = parseInt(prompt("How many squares do you need?"), 10);

    if (isNaN(input) || input <= 0) {
        alert("Please input a valid number");
        return;
    }

    if (input > 100) {
        alert("kindly input a lower number (max: 100).")
        return;
    }

    let existingGrid = document.querySelector("#grid");
    if (existingGrid) {
        existingGrid.remove();
    }

    const grid = document.createElement("div");
    grid.id = "grid";
    grid.style.width = "100vw";
    grid.style.height = "100vh";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    body.appendChild(grid);

    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            const gridContainer = document.createElement("div");
            gridContainer.classList.add("grid-container");


            gridContainer.addEventListener("mouseover", function () {
                gridContainer.style.backgroundColor = getRandomColor();

                setTimeout(() => {
                    gridContainer.style.backgroundColor = "";
                }, 500);
            });

            grid.appendChild(gridContainer);
            }
        }
    });


    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});



