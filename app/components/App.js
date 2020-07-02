import React, { Component } from "react";
import Bars from "./Bars";
import BubbleSort from "./Algorithms/BubbleSort";
import SelectionSort from "./Algorithms/SelectionSort";
import QuickSort from "./Algorithms/QuickSort";
import MergeSort from "./Algorithms/MergeSort";
import HeapSort from "./Algorithms/HeapSort";
import './App.scss';

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function changeColor(animations) {
  const arrayBars = document.getElementsByClassName('arrayBars');
  for(let i=0;i<animations.length;i++)
  {
    const first = animations[i][0];
    const second = animations[i][1];
    const x = animations[i][2];
    const y = animations[i][3];
    
    arrayBars[first].style.backgroundColor = "blue";
    arrayBars[second].style.backgroundColor = "blue";
    arrayBars[first].style.height = `${x*2}px`;
    arrayBars[second].style.height = `${y*2}px`;

    await delay(10);
    
    arrayBars[first].style.backgroundColor = "#F08080";
    arrayBars[second].style.backgroundColor = "#F08080";
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
    this.resetArray = this.resetArray.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick(animations) {
    changeColor(animations);
  }

  resetArray() {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(randomNumberGenerator(5, 450));
    }
    this.setState({ array: arr });
  }

  componentDidMount() {
    this.resetArray();
  }

  render() {
    return (
      <div className="container">
        <header> SORTING VISUALISER </header>
        <Bars array={this.state.array} />
        <footer>
          <button onClick={this.resetArray} onMouseOver={this.mouseover}>NEW ARRAY</button>
          <BubbleSort  array = {this.state.array} handleClick={this.handleClick}/>
          <SelectionSort array = {this.state.array} handleClick={this.handleClick}/>
          <QuickSort array = {this.state.array} handleClick={this.handleClick}/>
          <MergeSort array = {this.state.array} handleClick={this.handleClick}/>
          <HeapSort array = {this.state.array} handleClick={this.handleClick}/>
        </footer>
      </div>
    );
  }
}

export default App;
