const Data = {

    "operation hours" : {
        "Sunday": [12, 21],
        "Monday": [9, 21],
        "Tuesday": [9, 21],
        "Wednesday": [9, 21],
        "Thursday": [9, 21],
        "Friday": [9, 21]
    },
    "hour range" : [9, 21],


    "employees" : [
        { 
            name: "Consultant A",
            id: 1,
            availability: {
                "Sunday":       "000000000",
                "Monday":       "002200000111",
                "Tuesday":      "000000000111",
                "Wednesday":    "000000000000",
                "Thursday":     "000000000000",
                "Friday":       "000201000000",
                "Saturday":     "000000000000"
            },
            hoursRequested: [6, 8]
        },
        {
            name: "Consultant B",
            id: 2,
            availability: {
                "Sunday":       "000110000",
                "Monday":       "000011110000",
                "Tuesday":      "000222000000",
                "Wednesday":    "000022000000",
                "Thursday":     "111111000000",
                "Friday":       "000001110000",
                "Saturday":     "000000000000"
            },
            hoursRequested: [8, 12]
        },
        { 
            name: "Consultant C",
            id: 3,
            availability: {
                "Sunday":       "111111111",
                "Monday":       "222211110011",
                "Tuesday":      "000001222000",
                "Wednesday":    "000001221000",
                "Thursday":     "111111000000",
                "Friday":       "000001111111",
                "Saturday":     "000000000000"
            },
            hoursRequested: [16, 20]
        }
    ]
}