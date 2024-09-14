document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const rows = 16;
    const columns = 16;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const gridContainer = document.createElement("div");
            gridContainer.classList.add("grid-container");

            gridContainer.addEventListener("mouseover", function () {
            gridContainer.classList.add("trail");

            setTimeout(() => {
                gridContainer.classList.remove("trail");
            }, 500);

        });

        body.appendChild(gridContainer);
        }
    }
})