const keys = [
  [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i']
  ],
  [
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r']
  ],
  [
    ['s','t','u'],
    ['v','w','x'],
    ['y','z','.']
  ]
]

convertInput=(str)=> {
  let res = ''
  str = str.toLowerCase()
  for(var i=0;i<str.length;i++) {
    if(str[i] === " ") {
      // console.log(res)
      res += ' '
    }
    for(var x=0;x<keys.length;x++) {
      for(var y=0;y<keys.length;y++) {
        for(var z=0;z<keys.length;z++) {
          if(str[i] === keys[x][y][z]) {
            res += ([x+1]+[y+1]+[z+1]+" ")
          }
        }
      }
    }
  }
  return encode(res)
}

encode=(nums)=> {
  let code = ''
  for(var i=0;i<nums.length;i++) {
    if(nums[i] == '1') {
      code += ". "
    } else if (nums[i] == '2') {
      code += ".. "
    } else if (nums[i] == '3') {
      code += '... '
    } else if (nums[i] == ' ' && nums[i+1] == ' ') {
      code += '_ '
    } else if (nums[i] == ' '){
      code += '-'
    }
  }
  return code
}

convertInput("bonjour. Je mapelle victor. Je viens du colorado")