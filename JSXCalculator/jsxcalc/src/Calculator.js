import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            inputString: ''
        }
        this.input = (event) => this.setState({
            inputString: this.state.inputString + event.target.value
        })
        this.equate = (event) => this.setState({
            inputString: eval(this.state.inputString)
        })

        this.waste = () => this.setState({

        })
    }

    specialCheck(val){
        var temp =String(this.state.inputString);
        if (val === '.' && temp.indexOf('.') >= 0){
            return false;
        } else {
            if (!temp.endsWith('+')&&!temp.endsWith('-')&&!temp.endsWith('/')&&!temp.endsWith('*')){
                return true;
            } else {
                return false;
            }
        }
    }
  render() {
    return (
      <div>
          <p>{this.state.inputString}</p>
          <button onClick={this.input} value = '7'>7</button>
          <button onClick={this.input} value = '8'>8</button>
          <button onClick={this.input} value = '9'>9</button>
          <button onClick={this.specialCheck('+') ?  this.input : this.waste} value = '+'>+</button><br/>
          <button onClick={this.input} value = '4'>4</button>
          <button onClick={this.input} value = '5'>5</button>
          <button onClick={this.input} value = '6'>6</button>
          <button onClick={this.specialCheck('-') ?  this.input : this.waste} value = '-'>-</button><br/>
          <button onClick={this.input} value = '1'>1</button>
          <button onClick={this.input} value = '2'>2</button>
          <button onClick={this.input} value = '3'>3</button>
          <button onClick={this.specialCheck('/') ?  this.input : this.waste} value = '/'>/</button><br/>
          <button onClick={this.input} value = '0'>0</button>
          <button onClick={this.specialCheck('.') ?  this.input : this.waste} value = '.'>.</button>
          <button onClick={this.specialCheck('=') ?  this.equate : this.waste} value = '='>=</button>
          <button onClick={this.specialCheck('*') ?  this.input : this.waste} value = '*'>x</button>
      </div>
    );
  }
}