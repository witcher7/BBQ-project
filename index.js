let data = document.querySelector(".name")
const submit = document.querySelector(".btn")
let content = document.querySelector(".main-content")
submit.addEventListener("click",function(){
    const save = data.value
    let message = `<h2>Congratulations!! 🥳,${save} </h2>
    <p>You are on your way to become BBQ master!</p>
    <p class="print">
                We'll never share your information
                without your permission
    </p>`
    content.innerHTML = message
})
