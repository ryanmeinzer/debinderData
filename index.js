const data = require('./data.json')

function transformData(data) {

    let newArr = []

    Object.values(data).forEach(function (key) {
        let tempObj = { name: '', books: [], isbn: 1234567891234, text: [] }

        tempObj.name = key[0]
        tempObj.books = [key[1]]
        // console.log(key[1])
        newArr.push(tempObj)

        // let newObj = {}
        // newObj[key[0]] = true
        // newArr.push(newObj)
    })

    console.log(newArr)

    // console.log(Object.keys(data))

    // Object.keys(data).forEach(function (key) {
    //     console.log(key)
    //     key = 
    // })

    // for (let el of newArr) {
    //     Object.values(el).forEach(function (key) {
    //     })
    //     // console.log(Object.values(el))
    //     // let newObj2 = {}

    // }

    // console.log(Object.keys(data))
   
}

transformData(data)