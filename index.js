const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const saveButton = document.getElementById("save");
const entryList = document.getElementById("entry-list");

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

incrementButton.addEventListener("click", () => {
    count++;
    updateCount();
});

decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
});

saveButton.addEventListener("click", () => {
    const entryItem = document.createElement("li");
    entryItem.textContent = `Count: ${count}`;
    entryList.appendChild(entryItem);
    count = 0; 
    updateCount();
});

updateCount();
