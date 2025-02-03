let numArr = [8, 1, 11]
    let max = 0

    numArr.reduce(function (acc, value) {
        if(value > max) {
            return max = value
        }
    }, 0)
    console.log(max);