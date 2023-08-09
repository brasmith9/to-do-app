const textBox = document.getElementById("task");
const btn = document.getElementById("btn");
const container = document.getElementById("card-content");
const emptyState = document.getElementById("empty-state");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const textValue = textBox.value;

    if(textValue === "") {
        alert("Task cannot be empty")
        return false;
    }
    let innerContent = document.createElement("div");
    innerContent.setAttribute("class", "content-inner");

    let input = document.createElement("input");
    input.setAttribute("class", "isTaskCompleted");
    input.setAttribute("type", "checkbox");

    let p = document.createElement("p");
    p.setAttribute("class", "task-text");

    p.innerHTML = textValue;

    innerContent.appendChild(input);
    innerContent.appendChild(p);

    emptyState.style.display = "none";
    container.appendChild(innerContent);

    textBox.value = "";

});