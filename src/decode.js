const keys = [
    [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ],
    [
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r']
    ],
    [
        ['s', 't', 'u'],
        ['v', 'w', 'x'],
        ['y', 'z', '.']
    ]
]

decode = (str) => {
    let newStr = ''
    let updated = ''
    let count = 0
    let spaces = []
    str.replace(/-/, " ")
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
            count++
        }
        if (str[i] === '_') {
            spaces.push(count + 1)
        }
        if (str[i] == "." && str[i + 1] == "." && str[i + 2] == "." && str[i + 3] !== "." && str[i - 1] !== ".") {
            newStr = newStr += '3'
        } else if (str[i] == "." && str[i + 1] == "." && str[i + 2] !== "." && str[i - 1] !== ".") {
            newStr = newStr += '2'
        } else if (str[i] == "." && str[i + 1] !== "." && str[i - 1] !== ".") {
            newStr = newStr += '1'
        }
    }
    for (let i = 0; i < newStr.length; i += 3) {
        updated += newStr[i]
        updated += newStr[i + 1]
        updated += newStr[i + 2]
        updated += ' '
    }
    decodeInput(updated, spaces)
}

decodeInput = (input, arr) => {
    let res = ''
    let spacedRes = ''
    for (let i = 0; i < input.length; i += 4) {
        res += keys[input[i] - 1][input[i + 1] - 1][input[i + 2] - 1]
    }
    // console.log(res)
    for (let i = 0; i < res.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            if (i === arr[x]) {
                spacedRes += " "
            }
        }
        spacedRes += res[i]
    }
    console.log(spacedRes)
}

decode('. . .. -.. .. ... -.. .. .. -.. . . -.. .. ... -... . ... -.. ... ... -... ... ... _ -.. . . -. .. .. _ -.. .. . -. . . -.. ... . -. .. .. -.. . ... -.. . ... -. .. .. _ -... .. . -. ... ... -. . ... -... . .. -.. .. ... -.. ... ... -... ... ... _ -.. . . -. .. .. _ -... .. . -. ... ... -. .. .. -.. .. .. -... . . _ -. .. . -... . ... _ -. . ... -.. .. ... -.. . ... -.. .. ... -.. ... ... -. . . -. .. . -.. .. ... -')