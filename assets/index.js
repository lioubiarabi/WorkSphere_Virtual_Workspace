let formModal = document.getElementById("addEmployeeForm");

formModal.addEventListener("submit", (e)=>{
    e.preventDefault();
    let inputs = formModal.querySelectorAll("input");
    console.log(inputs)
})

// function for validate the inputs
function validate(input, regex) {
    
}