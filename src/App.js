import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import SimpleTabs from './components/Tabs'
import Response from './components/Response'


class App extends Component {

  state = {
    key: [
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
  }


  encodeInput=(str)=> {
    str = this.state.value
    let keys = this.state.key
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
    return this.encode(res)
  }

  encode=(nums)=> {
    let code = ''
    for(var i=0;i<nums.length;i++) {
      if(nums[i] === '1') {
        code += ". "
      } else if (nums[i] === '2') {
        code += ".. "
      } else if (nums[i] === '3') {
        code += '... '
      } else if (nums[i] === ' ' && nums[i + 1] === ' ') {
        code += '_ '
      } else if (nums[i] === ' '){
        code += '-'
      }
    }
    // return code
    this.setState({ encoded: code })
    // console.log(code)
  }

  decode = (str) => {
    // str = this.encoded
    str = this.state.value
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
        if (str[i] === "." && str[i + 1] === "." && str[i + 2] === "." && str[i + 3] !== "." && str[i - 1] !== ".") {
            newStr = newStr += '3'
        } else if (str[i] === "." && str[i + 1] === "." && str[i + 2] !== "." && str[i - 1] !== ".") {
            newStr = newStr += '2'
        } else if (str[i] === "." && str[i + 1] !== "." && str[i - 1] !== ".") {
            newStr = newStr += '1'
        }
    }
    for (let i = 0; i < newStr.length; i += 3) {
        updated += newStr[i]
        updated += newStr[i + 1]
        updated += newStr[i + 2]
        updated += ' '
    }
    this.decodeInput(updated, spaces)
  }

  decodeInput = (input, arr) => {
    let keys = this.state.key
    let res = ''
    let spacedRes = ''
    for (let i = 0; i < input.length; i += 4) {
        res += keys[input[i] - 1][input[i + 1] - 1][input[i + 2] - 1]
    }
    for (let i = 0; i < res.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            if (i === arr[x]) {
                spacedRes += " "
            }
        }
        spacedRes += res[i]
    }
    // console.log(spacedRes)
    this.setState({ decoded: spacedRes })
  }
  
  handleText = (e) => {
    e.preventDefault()
    this.setState({ value: e.target.value })
  }

  resetButton = () => {
    this.setState({ decoded: '' })
    this.setState({ encoded: '' })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <SimpleTabs encodeInput={this.encodeInput}
                      decodeInput={this.decode}
                      handleText={this.handleText}/>
          <div className="res">
            <Response resetButton={this.resetButton}
                      textDecoded={this.state.decoded}
                      textEncoded={this.state.encoded} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
