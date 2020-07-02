import React, { Component } from 'react';

function partition (arr,low,high,animations)  
{  
    let pivot = arr[high]; 
    let i = (low - 1); 
  
    for (let j = low; j <= high - 1; j++)  
    {   
        if (arr[j] < pivot)  
        {  
            i++; 
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            animations.push([i,j,arr[i],arr[j]]);
        }  
    }  
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    animations.push([i+1,high,arr[i+1],arr[high]]);
    return (i + 1);  
}  

function quickSort(arr,low,high,animations)  
{  
    if (low < high)  
    {  
        let pi = partition(arr, low, high,animations);  
        quickSort(arr, low, pi - 1,animations);  
        quickSort(arr, pi + 1, high,animations);  
    }  
} 

class QuickSort extends Component {

    constructor(props) {
        super(props);
        this.quickSort = this.quickSort.bind(this);
      }

    quickSort() {
        const sortedArr = this.props.array;
        const n = sortedArr.length;
        const animations = [];
        quickSort(sortedArr,0,n-1,animations);
        console.log(sortedArr);
        this.props.handleClick(animations);
    }

    render() { 
        return ( 
            <button onClick={this.quickSort}>QUICK SORT</button>
         );
    }
}
 
export default QuickSort;