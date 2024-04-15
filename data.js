/**
 * Date Last Modified: 04/15/24
 * @author Eli DeWitt
 */

const Data = {

    "operation hours" : {
        "Sunday": [12, 21],
        "Monday": [9, 21],
        "Tuesday": [9, 21],
        "Wednesday": [9, 21],
        "Thursday": [9, 21],
        "Friday": [9, 16]
    },
    "hour range" : [9, 21],


    "employees" : [] // will be imported
}

function translateAvail(messy) {

    let result = {
        "Sunday":       [0,0,0,0,0,0,0,0,0],
        "Monday":       [0,0,0,0,0,0,0,0,0,0,0,0],
        "Tuesday":      [0,0,0,0,0,0,0,0,0,0,0,0],
        "Wednesday":    [0,0,0,0,0,0,0,0,0,0,0,0],
        "Thursday":     [0,0,0,0,0,0,0,0,0,0,0,0],
        "Friday":       [0,0,0,0,0,0,0,0]
    }

    //guh
    let guh = [];
    for (let i = 0; i < messy.length; i++) {
        guh[i] = messy[i].split(/\s*,\s*/); // split by comma (maybe a space next to it)
    }

    // check sunday
    for (let el of guh[0]) {
        console.log(el);
        if (el == "12pm") result["Sunday"][0] = 1;
        else if (el == "1pm") result["Sunday"][1] = 1;
        else if (el == "2pm") result["Sunday"][2] = 1;
        else if (el == "3pm") result["Sunday"][3] = 1;
        else if (el == "4pm") result["Sunday"][4] = 1;
        else if (el == "5pm") result["Sunday"][5] = 1;
        else if (el == "6pm") result["Sunday"][6] = 1;
        else if (el == "7pm") result["Sunday"][7] = 1;
        else if (el == "8pm") result["Sunday"][8] = 1;
    }

    for (let el of guh[1]) {
        if (el == "12pm") result["Sunday"][0] = 2;
        else if (el == "1pm") result["Sunday"][1] = 2;
        else if (el == "2pm") result["Sunday"][2] = 2;
        else if (el == "3pm") result["Sunday"][3] = 2;
        else if (el == "4pm") result["Sunday"][4] = 2;
        else if (el == "5pm") result["Sunday"][5] = 2;
        else if (el == "6pm") result["Sunday"][6] = 2;
        else if (el == "7pm") result["Sunday"][7] = 2;
        else if (el == "8pm") result["Sunday"][8] = 2;
    }


    // check monday
    for (let el of guh[2]) {
        if (el == "9am") result["Monday"][0] = 1;
        else if (el == "10am") result["Monday"][1] = 1;
        else if (el == "11am") result["Monday"][2] = 1;
        else if (el == "12pm") result["Monday"][3] = 1;
        else if (el == "1pm") result["Monday"][4] = 1;
        else if (el == "2pm") result["Monday"][5] = 1;
        else if (el == "3pm") result["Monday"][6] = 1;
        else if (el == "4pm") result["Monday"][7] = 1;
        else if (el == "5pm") result["Monday"][8] = 1;
        else if (el == "6pm") result["Monday"][9] = 1;
        else if (el == "7pm") result["Monday"][10] = 1;
        else if (el == "8pm") result["Monday"][11] = 1;
    }

    for (let el of guh[3]) {
        if (el == "9am") result["Monday"][0] = 2;
        else if (el == "10am") result["Monday"][1] = 2;
        else if (el == "11am") result["Monday"][2] = 2;
        else if (el == "12pm") result["Monday"][3] = 2;
        else if (el == "1pm") result["Monday"][4] = 2;
        else if (el == "2pm") result["Monday"][5] = 2;
        else if (el == "3pm") result["Monday"][6] = 2;
        else if (el == "4pm") result["Monday"][7] = 2;
        else if (el == "5pm") result["Monday"][8] = 2;
        else if (el == "6pm") result["Monday"][9] = 2;
        else if (el == "7pm") result["Monday"][10] = 2;
        else if (el == "8pm") result["Monday"][11] = 2;    
    }

    // check Tuesday
    for (let el of guh[4]) {
        if (el == "9am") result["Tuesday"][0] = 1;
        else if (el == "10am") result["Tuesday"][1] = 1;
        else if (el == "11am") result["Tuesday"][2] = 1;
        else if (el == "12pm") result["Tuesday"][3] = 1;
        else if (el == "1pm") result["Tuesday"][4] = 1;
        else if (el == "2pm") result["Tuesday"][5] = 1;
        else if (el == "3pm") result["Tuesday"][6] = 1;
        else if (el == "4pm") result["Tuesday"][7] = 1;
        else if (el == "5pm") result["Tuesday"][8] = 1;
        else if (el == "6pm") result["Tuesday"][9] = 1;
        else if (el == "7pm") result["Tuesday"][10] = 1;
        else if (el == "8pm") result["Tuesday"][11] = 1;
    }

    for (let el of guh[5]) {
        if (el == "9am") result["Tuesday"][0] = 2;
        else if (el == "10am") result["Tuesday"][1] = 2;
        else if (el == "11am") result["Tuesday"][2] = 2;
        else if (el == "12pm") result["Tuesday"][3] = 2;
        else if (el == "1pm") result["Tuesday"][4] = 2;
        else if (el == "2pm") result["Tuesday"][5] = 2;
        else if (el == "3pm") result["Tuesday"][6] = 2;
        else if (el == "4pm") result["Tuesday"][7] = 2;
        else if (el == "5pm") result["Tuesday"][8] = 2;
        else if (el == "6pm") result["Tuesday"][9] = 2;
        else if (el == "7pm") result["Tuesday"][10] = 2;
        else if (el == "8pm") result["Tuesday"][11] = 2;    
    }

    // check Wednesday
    for (let el of guh[6]) {
        if (el == "9am") result["Wednesday"][0] = 1;
        else if (el == "10am") result["Wednesday"][1] = 1;
        else if (el == "11am") result["Wednesday"][2] = 1;
        else if (el == "12pm") result["Wednesday"][3] = 1;
        else if (el == "1pm") result["Wednesday"][4] = 1;
        else if (el == "2pm") result["Wednesday"][5] = 1;
        else if (el == "3pm") result["Wednesday"][6] = 1;
        else if (el == "4pm") result["Wednesday"][7] = 1;
        else if (el == "5pm") result["Wednesday"][8] = 1;
        else if (el == "6pm") result["Wednesday"][9] = 1;
        else if (el == "7pm") result["Wednesday"][10] = 1;
        else if (el == "8pm") result["Wednesday"][11] = 1;
    }

    for (let el of guh[7]) {
        if (el == "9am") result["Wednesday"][0] = 2;
        else if (el == "10am") result["Wednesday"][1] = 2;
        else if (el == "11am") result["Wednesday"][2] = 2;
        else if (el == "12pm") result["Wednesday"][3] = 2;
        else if (el == "1pm") result["Wednesday"][4] = 2;
        else if (el == "2pm") result["Wednesday"][5] = 2;
        else if (el == "3pm") result["Wednesday"][6] = 2;
        else if (el == "4pm") result["Wednesday"][7] = 2;
        else if (el == "5pm") result["Wednesday"][8] = 2;
        else if (el == "6pm") result["Wednesday"][9] = 2;
        else if (el == "7pm") result["Wednesday"][10] = 2;
        else if (el == "8pm") result["Wednesday"][11] = 2;    
    }

    // check Thursday
    for (let el of guh[8]) {
        if (el == "9am") result["Thursday"][0] = 1;
        else if (el == "10am") result["Thursday"][1] = 1;
        else if (el == "11am") result["Thursday"][2] = 1;
        else if (el == "12pm") result["Thursday"][3] = 1;
        else if (el == "1pm") result["Thursday"][4] = 1;
        else if (el == "2pm") result["Thursday"][5] = 1;
        else if (el == "3pm") result["Thursday"][6] = 1;
        else if (el == "4pm") result["Thursday"][7] = 1;
        else if (el == "5pm") result["Thursday"][8] = 1;
        else if (el == "6pm") result["Thursday"][9] = 1;
        else if (el == "7pm") result["Thursday"][10] = 1;
        else if (el == "8pm") result["Thursday"][11] = 1;
    }

    for (let el of guh[9]) {
        if (el == "9am") result["Thursday"][0] = 2;
        else if (el == "10am") result["Thursday"][1] = 2;
        else if (el == "11am") result["Thursday"][2] = 2;
        else if (el == "12pm") result["Thursday"][3] = 2;
        else if (el == "1pm") result["Thursday"][4] = 2;
        else if (el == "2pm") result["Thursday"][5] = 2;
        else if (el == "3pm") result["Thursday"][6] = 2;
        else if (el == "4pm") result["Thursday"][7] = 2;
        else if (el == "5pm") result["Thursday"][8] = 2;
        else if (el == "6pm") result["Thursday"][9] = 2;
        else if (el == "7pm") result["Thursday"][10] = 2;
        else if (el == "8pm") result["Thursday"][11] = 2;    
    }

    // check Friday
    for (let el of guh[10]) {
        if (el == "9am") result["Friday"][0] = 1;
        else if (el == "10am") result["Friday"][1] = 1;
        else if (el == "11am") result["Friday"][2] = 1;
        else if (el == "12pm") result["Friday"][3] = 1;
        else if (el == "1pm") result["Friday"][4] = 1;
        else if (el == "2pm") result["Friday"][5] = 1;
        else if (el == "3pm") result["Friday"][6] = 1;
        else if (el == "4pm") result["Friday"][7] = 1;
    }

    for (let el of guh[11]) {
        if (el == "9am") result["Friday"][0] = 2;
        else if (el == "10am") result["Friday"][1] = 2;
        else if (el == "11am") result["Friday"][2] = 2;
        else if (el == "12pm") result["Friday"][3] = 2;
        else if (el == "1pm") result["Friday"][4] = 2;
        else if (el == "2pm") result["Friday"][5] = 2;
        else if (el == "3pm") result["Friday"][6] = 2;
        else if (el == "4pm") result["Friday"][7] = 2;  
    }

    return result;
}


function imported() {
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // when file uplaoded, do this
        let allTextLines = reader.result.split(/\r\n|\n/);

        let availabilities = [];
        for (let i = 1; i < allTextLines.length; i ++) {
            availabilities[i-1] = allTextLines[i].split(/\t/);
        }

        for (let consultant of availabilities) {

            let avail = translateAvail(consultant.slice(4, 16));

            Data["employees"][Data["employees"].length] = {
                name: consultant[2] + " " + consultant[3],
                id: consultant[2] + " " + consultant[3],
                availability: avail,
                hoursRequested: [consultant[16], consultant[17]]
            }
        }
        buildTable();
      },
      false,
    );
  
    if (file) {
      reader.readAsText(file);
    }
}
