let employeesArray = [
    {
        "experiences": [
            {
                "exp-position": "manager",
                "exp_company": "hafdu",
                "exp_start": "2001-02-11",
                "exp_end": "2005-01-11"
            }
        ],
        "profileUrl": "https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg",
        "name": "halima el hafidy",
        "role": "manager",
        "email": "elhafidy.halima06@gmail.com",
        "phone": "+212611810124"
    }
];

// render the employees function
function putItems() {
    let unassignedList = document.getElementById("unassignedList");

    // clear the list
    unassignedList.innerHTML = "";

    // no found msg when 0 employees
    if(!employeesArray.length) {
        unassignedList.innerHTML = `<p class="empty-message">No unassigned employees. Click "Add New" to begin.</p>`;
        return;
    }
    
    // render the employees
    employeesArray.forEach(item=>{
        unassignedList.innerHTML += `<div class="employee-card">
                    <img src="${item.profileUrl}"
                        alt="employee profile" class="employee-avatar">
                    <div class="employee-info">
                        <div class="employee-name">${item.name}</div>
                        <div class="employee-role">
                            <span class="role-badge badge-manager">${item.role}</span>
                        </div>
                    </div>
                    <div class="employee-actions">

                        <button class="btn-icon btn-edit">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>

                        <button class="btn-icon btn-delete">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path
                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                </path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </div>`;
    });
};
putItems();

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

    // remove the worning message when typing
    document.getElementById("warningMessage").style.display = "none";

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

        validate(inputs[0], regex["exp_position"]) ? (newExp["exp-position"] = inputs[0].value) : (isValid = false);
        validate(inputs[1], regex["exp_company"]) ? (newExp["exp_company"] = inputs[1].value) : (isValid = false);

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

    if (isValid) {
        // update the unassigned list
        employeesArray.push(newEmployee);
        putItems();

        closeEmployeeModal();
    } else {
        // show the warning message
        document.getElementById("warningMessage").style.display = "block";
    }
})

// function for validate the inputs
function validate(input, regex) {
    if (regex && regex.test(input.value)) {
        input.style.borderColor = "#2ecc71";
        return true;
    } else {
        input.style.borderColor = "#e74c3c";
        return false;
    }
}

// edit an employee
function edit(id) {
    //find the employee index in the employeesarray by id
    let employeeIndex = employeesArray.findIndex(emp => emp.id == id);
    
}