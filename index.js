const data = require('./data.json')

function transformData(data) {

    // console.log(Object.keys(data)[0])

    let newArr = []
    let count = 0

    Object.values(data).forEach(function (key) {

        let tempObj = { name: '', books: [], isbn: 1234567891234, text: [] }

        tempObj.name = key[0]
        tempObj.books = [key[1]]
        tempObj.isbn = Object.keys(data)[count]
        tempObj.text = [key[2]]
        // console.log([key[2]])
        newArr.push(tempObj)
        count++
    })

    console.log(newArr)
   
}

transformData(data)