const inputElement = document.querySelector("#taskInput");
const submitButton = document.querySelector("#submitButton");
const todoList = document.querySelector(".ul-wrapper");
const form = document.querySelector("form");
const deleteButton = document.querySelector(".delete");
const search = document.querySelector(".search-button");
const searchInput = document.querySelector(".search");
let todoArray = [];
let index = 0

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span>${inputElement.value}</span> <button  id=${index} class="delete">Delete</button>
    <input type="checkbox" id="checkbox" class="Completed"></input>
    `;

    todoList.appendChild(newLi);

    todoArray.push(inputElement.value);
    console.log(todoArray);

    sessionStorage.setItem("todo", JSON.stringify(todoArray));
    const dlt = newLi.children[1];
    dlt.addEventListener("click", function (e) {
        console.log(e);
        e.target.parentNode.remove();
        todoArray.splice(e.target.id, 1);

    })

    const cmplt = newLi.children[2];
    cmplt.addEventListener("change", function (e) {
        console.log(e);
        if (e.target.checked) {
            e.target.parentNode.firstChild.style.textDecoration = "line-through";
            e.target.parentNode.firstChild.style.color = "green";
        }
        else {
            e.target.parentNode.firstChild.style.textDecoration = "none";
            e.target.parentNode.firstChild.style.color = "black";
        }
    })
    inputElement.value = "";
    index++;
})


searchInput.addEventListener("keyup", function (e) {
    e.preventDefault();
    const searchValue = searchInput.value;
    console.log(searchValue);
    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].includes(searchValue)) {
            const li = document.querySelectorAll("li");
            li[i].style.display = "flex";

            console.log(li[i]);
        }
        else {
            const li = document.querySelectorAll("li");
            li[i].style.display = "none";
        }
    }
})

