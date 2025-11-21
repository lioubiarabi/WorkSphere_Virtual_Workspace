let employeesArray = [
    {
        "experiences": [
            {
                "exp_position": "manager",
                "exp_company": "hafdu",
                "exp_start": "2001-02-11",
                "exp_end": "2005-01-11"
            },
            {
                "exp_position": "manager",
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
    if (!employeesArray.length) {
        document.getElementById("noEmployee").style.display = "block";
        return;
    }

    // render the employees
    employeesArray.forEach((item, index) => {
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

                        <button class="btn-icon btn-edit" onclick="edit(${index})">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>

                        <button class="btn-icon btn-delete" onclick="delete(${index})">
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

// when click add new employee
document.getElementById("addWorkerBtn").addEventListener("click", () => {
    openEmployeeModal();
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

            validate(inputs[0], regex["exp_position"]) ? (newExp["exp_position"] = inputs[0].value) : (isValid = false);
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
});

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

// assign function
function assign(zone) {

}

// delete an employee
function deleteEmployee(index) {
    
}

// edit an employee
function edit(index) {
    let employee = employeesArray[index];

    openEmployeeModal();
    document.querySelector(".modal-header h2").innerText = "Edit: " + employeesArray[index].name;

    // fill the modal inputs
    let inputs = formModal.querySelectorAll(".photo-section input, .form-grid input, .form-grid select");
    document.getElementById("previewImg").src = employee.profileUrl;
    inputs.forEach(input => {
        input.value = employee[input.getAttribute("name")];
    })
    document.getElementById("experienceList").innerHTML = "";
    for (let i = 0; i < employee.experiences.length; i++) {
        document.getElementById("experienceList").innerHTML += `
                <div class="experience-item">
                                <button type="button" class="btn-remove-exp" style="display:${i ? "block" : "none"}">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                
                                <div class="exp-grid">
                                    <div class="form-group">
                                        <label>Position</label>
                                        <input type="text" name="exp_position" placeholder="Position" value="${employee.experiences[i].exp_position}" required>
                                    </div>

                                    <div class="form-group">
                                        <label>Company</label>
                                        <input type="text" name="exp_company" placeholder="Company" value="${employee.experiences[i].exp_company}" required>
                                    </div>

                                    <div class="form-group">
                                        <label>Start Date</label>
                                        <input type="date"  name="exp_start" value="${employee.experiences[i].exp_start}"  required>
                                    </div>

                                    <div class="form-group">
                                        <label>End Date</label>
                                        <input type="date" name="exp_end" value="${employee.experiences[i].exp_end}" required>
                                    </div>
                                </div>
                            </div>
            `;

    }

    formModal.addEventListener('sumbit', (e) => {
        e.preventDefault();
        
        let updateEmployee = { experiences: [] }, isValid = true;

        inputs.forEach(input => {
            let name = input.getAttribute("name");
            validate(input, regex[name]) ? (updateEmployee[name] = input.value) : (isValid = false);
        });

        //validating the experiences
        formModal.querySelectorAll(".experience-item").forEach(exp => {
            let newExp = {};
            let inputs = exp.querySelectorAll("input");

            validate(inputs[0], regex["exp_position"]) ? (newExp["exp_position"] = inputs[0].value) : (isValid = false);
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

            updateEmployee["experiences"].push(newExp);
        });

        if (isValid) {
            // update the unassigned list
            employeesArray[index] = updateEmployee;
            putItems();

            closeEmployeeModal();
        } else {
            // show the warning message
            document.getElementById("warningMessage").style.display = "block";
        }

    })
}