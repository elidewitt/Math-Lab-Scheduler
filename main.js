const target = document.getElementById("target");

let scheduleTable = target.appendChild(createElement("table"));


// build table header
let header = scheduleTable.appendChild(createElement("tr"));
header.appendChild(createElement("th", "", "Hour"));
for (let day in Data["operation hours"]) {
    header.appendChild(createElement("th", "", day));
}

// before placing header, build slots

for (let i = Data["hour range"][0]; i < Data["hour range"][1]; i++) {
    let row = scheduleTable.appendChild(createElement("tr"));
    row.appendChild(createElement("td", "", ((i-1) % 12 + 1) + " - " + (i % 12 + 1)));
    for (let day in Data["operation hours"]) {

        let hour;
        if (i >= Data["operation hours"][day][0] && i <= Data["operation hours"][day][1]) {
            hour = row.appendChild(createElement("td", "bordered"));
        } else {
            hour = row.appendChild(createElement("td"))
        }

        // check if each employee has in availability
        for (let employee of Data["employees"]) {
            let availabilityCode = employee.availability[day][i - Data["operation hours"][day][0]];
            if (availabilityCode != 0 && availabilityCode != null) {

                let container;
                if (availabilityCode == 1) {
                    container = hour.appendChild(createElement("div", "boxContent code1"));
                } else if (availabilityCode == 2) {
                    container = hour.appendChild(createElement("div", "boxContent code2"));
                } else {
                    container = hour.appendChild(createElement("div", "boxContent"));
                }

                let checkbox = container.appendChild(createElement("input", "checkbox " + employee.id));
                checkbox.type = "checkbox";
                checkbox.onclick = updateScheduled;
                container.appendChild(createElement("td", "", employee.name));
                
            }
            
        }
    }
}

function updateScheduled() {
    for (let employee of Data["employees"]) {
        let count = 0;
        for (check of document.getElementsByClassName(employee.id)) { count += check.checked; }
        document.getElementById(employee.id).innerHTML = count;

    }
}



// document.getElementsByClassName("classstringhere").length



//Show hour requests
let hoursTable = target.appendChild(createElement("table", "hours"));

let hoursHeader = hoursTable.appendChild(createElement("tr"));
hoursHeader.appendChild(createElement("th", "", "Employee"));
hoursHeader.appendChild(createElement("th", "", "Requested"));
hoursHeader.appendChild(createElement("th", "", "Scheduled"));

for (let employee of Data["employees"]) {
    let row = hoursTable.appendChild(createElement("tr", "bordered"));
    row.appendChild(createElement("td", "", employee.name));
    row.appendChild(createElement("td", "", employee.hoursRequested[0] + "-" + employee.hoursRequested[1]));

    scheduled = row.appendChild(createElement("td", "", "0"));
    scheduled.id = employee.id;

}



function createElement(tag, classList, innerHTML) {
    elt = document.createElement(tag);
    if (classList) target.appendChild(elt).classList = classList;
    if (innerHTML) elt.appendChild(document.createTextNode(innerHTML));
  
    return target.appendChild(elt);
  }