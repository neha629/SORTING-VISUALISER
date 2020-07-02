import React, { Component } from 'react';

function heapify(arr, n, i, animations) 
{ 
    let largest = i;
    let l = 2*i + 1;
    let r = 2*i + 2;
  
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
  
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
  
    if (largest != i) 
    { 
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        animations.push([i,largest,arr[i],arr[largest]]); 
        heapify(arr, n, largest, animations); 
    } 
} 
  
function heapSort(arr, n, animations) 
{ 
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) 
        heapify(arr, n, i, animations); 
   
    for (let i=n-1; i>0; i--) 
    { 
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        animations.push([0,i,arr[0],arr[i]]);
        heapify(arr, i, 0, animations); 
    } 
} 

class HeapSort extends Component {

    constructor(props) {
        super(props);
        this.heapSort = this.heapSort.bind(this);
      }

    heapSort() {
        const sortedArr = this.props.array;
        const n = sortedArr.length;
        const animations = [];
        heapSort(sortedArr,n,animations);
        this.props.handleClick(animations);
    }

    render() { 
        return ( 
            <button onClick={this.heapSort}>HEAP SORT</button>
         );
    }
}
 
export default HeapSort;