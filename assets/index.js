let employeeArray = [];

let regex = {
    profileUrl : /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    name: /^[a-zA-Z\s]{3,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+212\s?[5-7]\d{8}$/,
    exp_position: /^[a-zA-Z\s]{3,}$/,
    exp_company: /^[a-zA-Z\s]{3,}$/
}

let formModal = document.getElementById("addEmployeeForm");
formModal.addEventListener("input", (e) => {
    let input = e.target;

    //skip validating dates until submit
    if(input.getAttribute("name") == "exp_start" || input.getAttribute("name") == "exp_end") {
        console.log("hello")
        return;
    }
    
    //preview the img
    if(input.getAttribute("name") == "profileUrl" && validate(input, regex[input.getAttribute("name")])){
        document.getElementById("previewImg").src = input.value;
        return;
    }

    validate(input, regex[input.getAttribute("name")]);
})

// function for validate the inputs
function validate(input, regex) {
    if (regex.test(input.value)) {
        input.style.borderColor = "#bdc3c7";
        return true;
    } else {
        input.style.borderColor = "red";
        return false;
    }
}