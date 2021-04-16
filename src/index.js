document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let ul = document.getElementById("tasks")
  let input = document.querySelector("form input")

  document.addEventListener("submit", function (e) {
    e.preventDefault()
    let li = document.createElement("li")
    li.textContent = input.value
    ul.appendChild(li)
    input.value = ""
  })

});
