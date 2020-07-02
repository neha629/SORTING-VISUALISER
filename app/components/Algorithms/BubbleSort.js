import React, { Component } from 'react';

class BubbleSort extends Component {

    constructor(props) {
        super(props);
        this.state = {hover:false};
        this.bubbleSort = this.bubbleSort.bind(this);
        this.handleHover = this.handleHover.bind(this);
      }

    handleHover() {
      this.setState({hover: !this.state.hover})
    }

    bubbleSort() {
        const sortedArr = this.props.array;
        const n = sortedArr.length;
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
        this.props.handleClick(animations);
    }

    render() { 
        return ( 
            <button className = {`${(this.state.hover===true)?"active":""}`} onClick={this.bubbleSort} onMouseOver = {this.handleHover} onMouseLeave = {this.handleHover}>BUBBLE SORT</button>
         );
    }
}
 
export default BubbleSort;