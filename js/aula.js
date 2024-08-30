console.log('Application is running')

const button = document.querySelector("#button")
const input = document.querySelector(".input")
const ul = document.querySelector(".tasks-list")

button.addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log('click');


if (!input.value) {
    return alert('A tarefa precisa ser preenchida')
}

const checkbox = '<input type="checkbox"/>' 

const li = `<li class="task-item" >
${checkbox}
<p>${input.value}</p>
</li>`

ul.innerHTML += li
})
