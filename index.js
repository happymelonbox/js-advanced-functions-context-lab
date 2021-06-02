/* Your Code Here */
const createEmployeeRecord = function(array = ['','','', 0]){
    let obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

const createEmployeeRecords = function(records){
    let newObj = records.map(function(record){
        return createEmployeeRecord(record)
    })
    return newObj
    }

function createTimeInEvent(date){
let time = date.split(' ')
this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(time[1]),
    date: time[0]
})
return this
}

function createTimeOutEvent(date){
let time = date.split(' ')
this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(time[1]),
    date: time[0]
})
return this
}

function hoursWorkedOnDate(date){
let timeInDate = this.timeInEvents.find(function(dateToFind){
    return dateToFind.date === date
})
let timeOutDate = this.timeOutEvents.find(function(dateToFind){
    return dateToFind.date === date
})
let hoursWorked = timeOutDate.hour - timeInDate.hour
return hoursWorked/100
}

function wagesEarnedOnDate(date){
let hoursWorked = hoursWorkedOnDate.call(this, date)
let payPerHour = this.payPerHour
return hoursWorked * payPerHour
}

function findEmployeeByFirstName(srcArray, name){
return srcArray.find((record)=>{
    return record.firstName === name
})
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(array){
    let totalWages = []
    for (let i = 0; i < array.length; i++){
        let wages = allWagesFor.call(array[i])
        totalWages.push(wages)
    }
    return totalWages.reduce(function(ac, cv){
        return ac + cv
    })

    }