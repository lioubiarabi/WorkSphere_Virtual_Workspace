let employeesArray = [
    {
        "id": 1,
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
        "profileUrl": "https://ui-avatars.com/api/?name=halima+elhafidy&background=5258db&color=fff",
        "name": "halima el hafidy",
        "role": "manager",
        "email": "elhafidy.halima06@gmail.com",
        "phone": "+212611810124"
    },
    {
        "id": 2,
        "experiences": [
            {
                "exp_position": "Network Admin",
                "exp_company": "Maroc Telecom",
                "exp_start": "2018-03-15",
                "exp_end": "2022-08-20"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Ahmed+Benali&background=3498db&color=fff",
        "name": "Ahmed Benali",
        "role": "it_technician",
        "email": "ahmed.benali@worksphere.com",
        "phone": "+212661234567"
    },
    {
        "id": 3,
        "experiences": [
            {
                "exp_position": "Front Desk",
                "exp_company": "Sofitel",
                "exp_start": "2019-01-10",
                "exp_end": "2023-02-28"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Sarah+Amrani&background=e67e22&color=fff",
        "name": "Sarah Amrani",
        "role": "receptionist",
        "email": "sarah.amrani@worksphere.com",
        "phone": "+212663987654"
    },
    {
        "id": 4,
        "experiences": [
            {
                "exp_position": "Security Agent",
                "exp_company": "G4S Maroc",
                "exp_start": "2015-06-01",
                "exp_end": "2020-12-31"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Karim+Tazi&background=2c3e50&color=fff",
        "name": "Karim Tazi",
        "role": "security",
        "email": "karim.tazi@worksphere.com",
        "phone": "+212661112233"
    },
    {
        "id": 5,
        "experiences": [],
        "profileUrl": "https://ui-avatars.com/api/?name=Layla+Idrissi&background=9b59b6&color=fff",
        "name": "Layla Idrissi",
        "role": "cleaner",
        "email": "layla.idrissi@worksphere.com",
        "phone": "+212662223344"
    },
    {
        "id": 6,
        "experiences": [
            {
                "exp_position": "Team Lead",
                "exp_company": "OCP Group",
                "exp_start": "2010-09-01",
                "exp_end": "2019-05-15"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Omar+Berrada&background=2ecc71&color=fff",
        "name": "Omar Berrada",
        "role": "manager",
        "email": "omar.berrada@worksphere.com",
        "phone": "+212661998877"
    },
    {
        "id": 7,
        "experiences": [
            {
                "exp_position": "Housekeeping",
                "exp_company": "Hygiene Plus",
                "exp_start": "2020-02-01",
                "exp_end": "2023-01-01"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Fatima+Zahra&background=1abc9c&color=fff",
        "name": "Fatima Zahra",
        "role": "cleaner",
        "email": "fatima.zahra@worksphere.com",
        "phone": "+212667776655"
    },
    {
        "id": 8,
        "experiences": [
            {
                "exp_position": "DevOps Engineer",
                "exp_company": "Casanet",
                "exp_start": "2021-01-15",
                "exp_end": "2023-06-30"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Youssef+Alami&background=3498db&color=fff",
        "name": "Youssef Alami",
        "role": "it_technician",
        "email": "youssef.alami@worksphere.com",
        "phone": "+212661445566"
    },
    {
        "id": 9,
        "experiences": [
            {
                "exp_position": "Junior Accountant",
                "exp_company": "Fiduciaire",
                "exp_start": "2022-03-01",
                "exp_end": "2023-09-01"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Amina+Chraibi&background=9b59b6&color=fff",
        "name": "Amina Chraibi",
        "role": "it_technician",
        "email": "amina.chraibi@worksphere.com",
        "phone": "+212662889900"
    },
    {
        "id": 10,
        "experiences": [
            {
                "exp_position": "Bouncer",
                "exp_company": "Club 55",
                "exp_start": "2018-06-01",
                "exp_end": "2021-06-01"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Hassan+Moussa&background=2c3e50&color=fff",
        "name": "Hassan Moussa",
        "role": "security",
        "email": "hassan.moussa@worksphere.com",
        "phone": "+212661000111"
    },
    {
        "id": 11,
        "experiences": [
            {
                "exp_position": "Secretary",
                "exp_company": "Law Firm",
                "exp_start": "2017-04-10",
                "exp_end": "2020-04-10"
            }
        ],
        "profileUrl": "https://ui-avatars.com/api/?name=Nadia+Kabbaj&background=e67e22&color=fff",
        "name": "Nadia Kabbaj",
        "role": "receptionist",
        "email": "nadia.kabbaj@worksphere.com",
        "phone": "+212663221144"
    }
];
let id = 12;
let capacity = {
    reception: 6,
    conference: 10,
    archive: 2,
    security: 3,
    servers: 2,
    staff: 8,
};
let required = ["reception", "archive", "security", "archive"];

// render the employees function
function putItems() {
    //render the assigned employees in each zone
    for (room in capacity) {
        let assignedEmployees = employeesArray.filter(emp=> emp.assigned && emp.room == room);
        
    }

    let unassignedList = document.getElementById("unassignedList");

    // filter the unassinged employees
    let unassignedEmployees = employeesArray.filter(emp => !emp.assigned)

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

// add new employee
formModal.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = formModal.querySelectorAll(".photo-section input, .form-grid input, .form-grid select");
    let newEmployee = { id: id, experiences: [] }, isValid = true;

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
        id++;

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

    let employees = employeesArray.filter(emp => !emp.assigned).filter(emp => permissions[zone].includes(emp.role));

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
    let employeeIndex = employeesArray.findIndex(emp => emp.id == id);
    let employeeobject = employeesArray[employeeIndex];

    // change the employee state to assigned
    employeeobject.assigned = true;
    employeeobject.room = room;

    //render the profile in the zone
    document.querySelector(`.${room}-room .profiles-group`).innerHTML += `<img src="${employeeobject.profileUrl}" class="mini-avatar" id="assigned-${employeeobject.id}" onclick="showInfo(${employeeobject.id})">`;

    // change the capacity
    capacity[room]--;
    document.querySelector(`.${room}-room`).style.background = capacity[room] ? "#ecf0f1" : "#ffcccc";

    // close assign modal
    document.getElementById("assignModal").classList.toggle("hidden");
    putItems();
}

// unassign function
function unassign(id) {
    let employeeIndex = employeesArray.findIndex(emp => emp.id == id);
    let employeeobject = employeesArray[employeeIndex];
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
    let employee = employeesArray.find(emp => emp.id == id);

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
        employeesArray = employeesArray.filter(e => e.id !== id);

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
