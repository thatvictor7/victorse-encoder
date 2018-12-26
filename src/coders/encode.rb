def convert_input(str)
  keys = [
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
  res = ''
  str = str.downcase
  key_l = str.length
  for j in 0..key_l do
     for x in 0..2 do
        for y in 0..2 do
          for z in 0..2 do
            
            if str[j] == keys[x][y][z]
              xx = x + 1
              yy = y + 1
              zz = z + 1
              res.concat(xx.to_s).concat(yy.to_s).concat(zz.to_s) << " "
            end
          end
        end
     end
     
  end
  encode(res.chop)
end

def encode(nums)
  code = ""
  for i in 0..nums.length do
    if nums[i] == "1"
      code.concat(". ")
    elsif  nums[i] == "2"
      code.concat(".. ")
    elsif nums[i] == "3"
      code.concat("... ")
    else nums[i] == " "
      code.concat("-")
    end
  end
  print code
end

convert_input('hEllo')