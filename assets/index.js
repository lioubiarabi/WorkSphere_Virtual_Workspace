let employeesArray = [];

let regex = {
    profileUrl: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    name: /^[a-zA-Z\s]{3,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+212\s?[5-7]\d{8}$/,
    role: /\S/,
    exp_position: /^[a-zA-Z\s]{3,}$/,
    exp_company: /^[a-zA-Z\s]{3,}$/
}

let formModal = document.getElementById("addEmployeeForm");
formModal.addEventListener("input", (e) => {
    let input = e.target;

    //skip validating dates until submit and reset there border colors
    if (input.getAttribute("name") == "exp_start" || input.getAttribute("name") == "exp_end") {
        input.style.borderColor = "#bdc3c7";
        return;
    };

    //preview the img
    if (input.getAttribute("name") == "profileUrl" && validate(input, regex[input.getAttribute("name")])) {
        document.getElementById("previewImg").src = input.value;
        return;
    }

    validate(input, regex[input.getAttribute("name")]);
})

formModal.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = formModal.querySelectorAll(".photo-section input, .form-grid input, .form-grid select");
    let newEmployee = { experiences: [] }, isValid = true;

    inputs.forEach(input => {
        let name = input.getAttribute("name");
        validate(input, regex[name]) ? (newEmployee[name] = input.value) : (isValid = false);
    });

    //validating the experiences
    formModal.querySelectorAll(".experience-item").forEach(exp => {
        let newExp = {};
        let inputs = exp.querySelectorAll("input");

        validate(inputs[0], regex["exp_position"]) ? (newEmployee["exp-position"] = inputs[0].value) : (isValid = false);
        validate(inputs[1], regex["exp_company"]) ? (newEmployee["exp_company"] = inputs[1].value) : (isValid = false);

        // validating dates
        let today = new Date();
        let exp_start_date = new Date(inputs[2].value);
        let exp_end_date = new Date(inputs[3].value);

        if (exp_start_date < today && exp_end_date > exp_start_date) {
            newExp["exp_start"] = inputs[2].value;
            newExp["exp_end"] = inputs[3].value;
        } else {
            validate(inputs[2], false);
            validate(inputs[3], false);
            isValid = false;
        }

        newEmployee["experiences"].push(newExp);
    });

})

// function for validate the inputs
function validate(input, regex) {
    if (regex && regex.test(input.value)) {
        input.style.borderColor = "#2ecc71";
        return true;
    } else {
        input.style.borderColor = "red";
        return false;
    }
}