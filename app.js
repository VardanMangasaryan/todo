window.onload = function () {
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");
    let items = document.getElementById("items");
    let id = 1;

    submit.addEventListener("click", addItem);
    items.addEventListener("click", deleteItem);

    function addItem() {
        if (input.value === "") {
            alert("There is no ToDo to submmit")
        } else {
            let text = input.value;
            let item = `<li id="li-${id}"><input type="checkbox" aria-label="Checkbox for following text input" class="unchecked">${text}</li>`;
            items.insertAdjacentHTML("afterbegin", item);
            id++;
            form.reset()
        }
    }

    function deleteItem(event) {
        const element = event.target;
        if (element.className === "checked") {
            element.parentNode.style.textDecoration = "";
            element.className = "unchecked"
        } else if (element.className === "unchecked") {
            element.className = "checked";
            element.parentNode.style.textDecoration = "line-through"
        }
    }
};
