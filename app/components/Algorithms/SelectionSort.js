import React, { Component } from 'react';

class SelectionSort extends Component {

    constructor(props) {
        super(props);
        this.selectionSort = this.selectionSort.bind(this);
      }

    selectionSort() {
        const sortedArr = this.props.array;
        const n = sortedArr.length;
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
        this.props.handleClick(animations);
      }

    render() { 
        return ( 
            <button onClick={this.selectionSort}>SELECTION SORT</button>
         );
    }
}
 
export default SelectionSort;