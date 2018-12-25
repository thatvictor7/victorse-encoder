// import { convertColorToString } from "material-ui/utils/colorManipulator";

decode = (str) => {
    let newStr = ''
    let updated = ''
    str.replace(/-/, " ")
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "." && str[i + 1] == "." && str[i + 2] == "." && str[i + 3] !== "." && str[i-1] !== ".") {
            newStr = newStr += '3'
        } else if (str[i] == "." && str[i + 1] == "." && str[i + 2] !== "." && str[i -1] !== ".") {
            newStr = newStr += '2'
        } else if (str[i] == "." && str[i + 1] !== "." && str[i -1] !== ".") {
            newStr = newStr += '1'
        }
    }
    for (let i = 0; i < newStr.length; i+=3) {
        updated += newStr[i]
        updated += newStr[i+1]
        updated += newStr[i+2]
        updated += ' '
    }
    // newStr = ' ' + newStr
    // newStr = " " + newStr.replace(/ ... /g, " 3 ").replace(/ .. /g, " 2 ").replace(/ .. /g, " 2 ")
    // newStr = newStr.replace(/ . /g, " 1 ").replace(/ .. /g, " 2 ").replace(/ .. /g, " 2 ").replace(/ ... /g, " 3 ")

    convertInput(updated)
}

convertInput = (input) => {
    console.log(input)
}

decode('. ... .. -. .. .. -.. . ... -.. . ... -.. .. ... -')