let form = document.querySelector("form")
let main = document.querySelector("main")

form.addEventListener("submit", e => {
    e.preventDefault()
    let ul = document.createElement("ul")
    let userName = document.createElement("li")
    let edit = document.createElement("li")
    let del = document.createElement("li")
    let input = document.createElement("input")

    input.value = e.target[0].value;
    input.setAttribute("disabled", "true")

    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete"

    userName.appendChild(input)
    edit.appendChild(editBtn)
    del.appendChild(delBtn)
    ul.appendChild(userName)
    ul.appendChild(edit)
    ul.appendChild(del)
    main.appendChild(ul)
    
    delBtn.addEventListener("click", e => {
        e.target.parentNode.parentNode.remove()
    })
    editBtn.addEventListener("click", () => {
        editBtn.textContent = "update"
        input.removeAttribute("disabled", "true")
    })
    editBtn.addEventListener("dblclick", () => {
        editBtn.textContent = "updated"
        input.setAttribute("disabled", "true")
    })
})


