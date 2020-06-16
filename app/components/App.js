import React, { Component } from "react";
import Bars from "./Bars";

const styles = {
  header: {
    color: "#333333",
    fontSize: "50px",
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
  },
};

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
    this.bubbleSort = this.bubbleSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
  } 

  bubbleSort() {
    const arr = this.state.array;
    const n = arr.length;
    const sortedArr = arr;
    const animations = [];
    for(let i=0;i<n-1;i++)
    {
      for(let j=0;j<n-i-1;j++)
      {
        if(sortedArr[j]>sortedArr[j+1])
        {
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j+1];
          sortedArr[j+1] = temp;
        }
        animations.push([j,j+1,sortedArr[j],sortedArr[j+1]]);
      }
    }
    changeColor(animations);
  }

  selectionSort() {
    const arr = this.state.array;
    const n = arr.length;
    const sortedArr = arr;
    const animations = []; 
    for(let i=0;i<n-1;i++)
    {
      let min_idx = i;
      for(let j=i+1;j<n;j++)
      {
        if(sortedArr[j]<sortedArr[min_idx])
          min_idx = j;
      }
      const temp = sortedArr[i];
      sortedArr[i] = sortedArr[min_idx];
      sortedArr[min_idx] = temp;
      animations.push([i,min_idx,sortedArr[i],sortedArr[min_idx]]);
    }
    changeColor(animations);
  }

  resetArray() {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(randomNumberGenerator(5, 450));
    }
    this.setState({ array: arr });
  }

  componentDidMount() {
    this.resetArray();
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <header style={styles.header}> SORTING VISUALISER </header>
        <Bars array={this.state.array} />
        <footer
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={this.resetArray}>NEW ARRAY</button>
          <button onClick={this.bubbleSort}>BUBBLE SORT</button>
          <button onClick={this.selectionSort}>SELECTION SORT</button>
          <button>MERGE SORT</button>
          <button>QUICK SORT</button>
          <button>HEAP SORT</button>
        </footer>
      </div>
    );
  }
}

export default App;
