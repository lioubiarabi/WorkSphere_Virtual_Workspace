// get data from localStorage
let employeesData = JSON.parse(localStorage.getItem("data"));
if(!employeesData) {
   (async()=> {
    let res = await fetch("./assets/employees.json");
    employeesData = await res.json();
    localStorage.setItem("data", JSON.stringify(employeesData));
    })()
}

let capacity = {
    reception: 6,
    conference: 10,
    archive: 2,
    security: 3,
    servers: 2,
    staff: 8,
};
var editMode = { active: false, index: null };
let required = ["reception", "archive", "security", "servers"];

// render the employees function
function putItems() {
    //render the assigned employees in each zone
    for (room in capacity) {
        let assignedEmployees = employeesData.employeesArray.filter(emp => emp.assigned && emp.room == room);

        // clear the room and set all zones to gray by default
        document.querySelector(`.${room}-room .profiles-group`).innerHTML = "";
        document.querySelector(`.${room}-room`).style.background = "#ecf0f1";

        if (assignedEmployees.length) {
            //render the profile in the zone
            assignedEmployees.forEach(emp => {
                document.querySelector(`.${room}-room .profiles-group`).innerHTML += `<img src="${emp.profileUrl}" class="mini-avatar" onclick="showInfo(${emp.id})">`;
            });
        } else {
            required.includes(room) && (document.querySelector(`.${room}-room`).style.background = "#ffcccc");
        }
    }

    let unassignedList = document.getElementById("unassignedList");

    // filter the unassinged employees
    let unassignedEmployees = employeesData.employeesArray.filter(emp => !emp.assigned)

    // clear the list
    unassignedList.innerHTML = "";

    // no found msg when 0 employees
    if (!unassignedEmployees.length) {
        document.getElementById("noEmployee").style.display = "block";
        return;
    } else {
        document.getElementById("noEmployee").style.display = "none";
    }

    // render the employees
    unassignedEmployees.forEach((item, index) => {
        unassignedList.innerHTML += `<div class="employee-card">
                    <img src="${item.profileUrl}"
                        alt="employee profile" class="employee-avatar">
                    <div class="employee-info">
                        <div class="employee-name">${item.name}</div>
                        <div class="employee-role">
                            <span class="role-badge badge-${item.role}">${item.role}</span>
                        </div>
                    </div>
                    <div class="employee-actions">

                        <button class="btn-icon btn-info" onclick="showInfo(${item.id})">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                        </button>

                        <button class="btn-icon btn-edit" onclick="edit(${item.id})">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>

                        <button class="btn-icon btn-delete" onclick="deleteEmployee(${item.id})">
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
    profileUrl: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-?=&%+]*)*\/?$/,
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

// add new employee or update an emplyee depend on editModex variable
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
        if (editMode.active) {
            // update the employee in the array and update
            employeesData.employeesArray[editMode.index] = newEmployee;
        } else {
            //give the object an id and add it to the employees array
            newEmployee.id = employeesData.idCounter;
            employeesData.employeesArray.push(newEmployee);
            employeesData.idCounter++;
        }

        // update the unassigned list
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

// assign function
function assign(zone) {
    // open the assign modal
    document.getElementById("assignModal").classList.toggle("hidden");
    document.getElementById("targetZoneName").innerText = zone + " room";

    // empty the assign list
    let assignList = document.getElementById("assignList");
    assignList.innerHTML = "";

    // check if the room reached its capacity
    if (!capacity[zone]) {
        document.getElementById("assignWarningMessage").style.display = "block";
        return;
    }

    // get the employee for the room
    let permissions = {
        reception: ["manager", "receptionist", "cleaner"],
        conference: ["manager", "receptionist", "it_technician", "security", "cleaner"],
        archive: ["manager", "receptionist", "it_technician", "security"],
        security: ["manager", "security", "cleaner"],
        servers: ["manager", "it_technician", "cleaner"],
        staff: ["manager", "receptionist", "it_technician", "security", "cleaner"]
    };

    let employees = employeesData.employeesArray.filter(emp => !emp.assigned).filter(emp => permissions[zone].includes(emp.role));

    // show no employees message when the array is empty
    document.getElementById("assignWarningMessage").style.display = employees.length ? "none" : "block";

    employees.forEach(emp => {
        assignList.innerHTML += `<div class="assign-card">
                                            <div class="assign-info">
                                                <img src="${emp.profileUrl}">
                                                <div class="text-group">
                                                    <div class="name">${emp.name}</div>
                                                    <div class="role">${emp.role}</div>
                                                </div>
                                            </div>
                                            <button class="btn-assign-action" onclick="assignToRoom(${emp.id}, '${zone}')">Assign</button>
                                        </div>`;

    })
}

// assign to room function
function assignToRoom(id, room) {
    let employeeIndex = employeesData.employeesArray.findIndex(emp => emp.id == id);
    let employeeobject = employeesData.employeesArray[employeeIndex];

    // change the employee state to assigned
    employeeobject.assigned = true;
    employeeobject.room = room;

    // change the capacity
    capacity[room]--;

    // close assign modal
    document.getElementById("assignModal").classList.toggle("hidden");
    putItems();
}

// unassign function
function unassign(id) {
    let employeeIndex = employeesData.employeesArray.findIndex(emp => emp.id == id);
    let employeeobject = employeesData.employeesArray[employeeIndex];
    employeeobject.assigned = false;

    // change the capacity
    capacity[employeeobject.room]++;

    // update
    putItems();

}

//show employee info in a model
let targetId, targetRoom;
function showInfo(id) {
    // open info-model
    document.getElementById("CVModal").classList.toggle("hidden");

    // find the employee
    let employee = employeesData.employeesArray.find(emp => emp.id == id);

    targetId = id;
    targetRoom = employee.room;

    // change the modal info
    document.getElementById("cvAvatar").src = employee.profileUrl;
    document.getElementById("cvIdentity").innerHTML = `<h3 id="cvName">${employee.name}</h3> <span class="role-badge badge-${employee.role}" id="cvRole">${employee.role}</span>`;
    document.getElementById("cvEmail").innerText = employee.email;
    document.getElementById("cvPhone").innerText = employee.phone;
    document.getElementById("cvZone").innerHTML = employee.assigned ? employee.room : "unassigned";
    document.getElementById("cvExperiences").innerHTML = employee.experiences.length;

    // hide/show unassign button
    document.getElementById("btnUnassignProfile").style.display = employee.assigned ? "block" : "none";
}

// info model actions
document.getElementById("btnDeleteProfile").addEventListener("click", () => {
    deleteEmployee(targetId, targetRoom);
    document.getElementById("CVModal").classList.toggle("hidden");
});
document.getElementById("btnUnassignProfile").addEventListener("click", () => {
    unassign(targetId);
    document.getElementById("CVModal").classList.toggle("hidden");
});

// delete an employee
function deleteEmployee(id, room) {
    if (confirm("are you sure?")) {
        employeesData.employeesArray = employeesData.employeesArray.filter(e => e.id !== id);

        // if the profile exist in the zone remove it
        let profile = document.getElementById(`assigned-${id}`);
        if (profile) profile.remove();

        // change the capacity and change zone color in case the emplyee is assigned
        if (room) {
            capacity[room]++;
            document.querySelector(`.${room}-room`).style.background = capacity[room] ? "#ecf0f1" : "#ffcccc";
        }

        //update
        putItems();
    }
}

// edit an employee for filling the forms of the employee modal
function edit(id) {
    // find the employee
    let index = employeesData.employeesArray.findIndex(emp => emp.id == id);
    let employee = employeesData.employeesArray[index];

    openEmployeeModal();
    editMode.active = true;
    editMode.index = index;

    document.querySelector("#employeeModal .modal-header h2").innerText = "Edit: " + employeesData.employeesArray[index].name;

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
}