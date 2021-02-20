const data = require('./data.json')

function transformData(data) {

    let newArr = []
    let count = 0

    Object.values(data).forEach(function (key) {

        let tempObj = { name: '', books: [{ title: '', isbn: 1234567891234, text: [] }] }

        tempObj.name = key[0]
        console.log(tempObj.books[0].title)
        tempObj.books[0].title = [key[1]]
        tempObj.books[0].isbn = Object.keys(data)[count]
        tempObj.books[0].text = []
        for (i = 2; i < key.length; i++) {
            tempObj.books[0].text.push(key[i])
        }
        newArr.push(tempObj)
        count++
    })

    let jsonStringOutput = JSON.stringify(newArr)
    let objectOutput = JSON.parse(jsonStringOutput)
    
    console.log(jsonStringOutput)
    console.log(objectOutput)
   
}

transformData(data)