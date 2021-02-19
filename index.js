const data = require('./data.json')

function transformData(data) {

    let newArr = []

    Object.values(data).forEach(function (key) {
        // console.log(key[0])
        let newObj = {}
        newObj[key[0]] = true
        newArr.push(newObj)
    })

    console.log(newArr)
   
}

transformData(data)