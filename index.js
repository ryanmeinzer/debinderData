const data = require('./data.json')

function transformData(data) {

    // console.log(Object.keys(data)[0])

    let newArr = []
    let count = 0

    Object.values(data).forEach(function (key) {

        let tempObj = { name: '', books: [{ title: '', isbn: 1234567891234, text: [] }] }

        tempObj.name = key[0]
        tempObj.books.title = [key[1]]
        tempObj.books.isbn = Object.keys(data)[count]
        tempObj.books.text = []
        for (i = 2; i < key.length; i++) {
            tempObj.books.text.push(key[i])
        }
        newArr.push(tempObj)
        count++
    })

    console.log(newArr)
   
}

transformData(data)