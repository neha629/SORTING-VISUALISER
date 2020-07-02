import React, { Component } from 'react';

function merge(sortedArr,l,mid,r,animations)
{
	let i = l , j = mid+1 , k = 0;
	let temp = [];

	while((i<=mid) && (j<=r))
	{
		if(sortedArr[i]<=sortedArr[j])
		{
			animations.push([k,j,sortedArr[i],sortedArr[j]]);
			temp[k++] = sortedArr[i++];
		}
		else
		{
			animations.push([i,k,sortedArr[i],sortedArr[j]]);
			temp[k++] = sortedArr[j++];
		}
	} 

	while(i<=mid)
	{
		// animations.push([k,i,sortedArr[i],sortedArr[i]]);
		temp[k++] = sortedArr[i++];
	}

	while(j<=r)
	{
		// animations.push([k,j,sortedArr[j],sortedArr[j]]);
		temp[k++] = sortedArr[j++];
	}

	for(let p=0;p<k;p++)
		sortedArr[l++] = temp[p];
}

function recurMerge(sortedArr,l,r,animations)
{
	if(l>=r)
		return;
    let mid = Math.floor((l+r)/2);
	recurMerge(sortedArr,l,mid,animations);
	recurMerge(sortedArr,mid+1,r,animations);
	merge(sortedArr,l,mid,r,animations);
}

class MergeSort extends Component {

    constructor(props) {
        super(props);
        this.mergeSort = this.mergeSort.bind(this);
      }

    mergeSort() {
        const sortedArr = this.props.array;
        const n = sortedArr.length;
        const animations = [];
        recurMerge(sortedArr,0,n-1,animations);
        this.props.handleClick(animations);
    }

    render() { 
        return ( 
            <button onClick={this.mergeSort}>MERGE SORT</button>
         );
    }
}
 
export default MergeSort;