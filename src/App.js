import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import SimpleTabs from './components/Tabs'
// import Home from './components/Home'

class App extends Component {

  state = {

  }


  convertInput=(str)=> {
    str = this.state.value
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
    let res = ''
    str = str.toLowerCase()
    for(var i=0;i<str.length;i++) {
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
      } else if (nums[i] === ' '){
        code += '-'
      }
    }
    // return code
    console.log(code)
  }
  
  handleText = (e) => {
    // console.log(e.target.value)
    this.setState({ value: e.target.value })
    // console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <SimpleTabs convertInput={this.convertInput}
                    handleText={this.handleText}/>
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
