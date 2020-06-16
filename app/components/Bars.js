import React, { Component } from "react";

class Bars extends Component {
  render() {
    return (
      <div  style={{display: "flex",alignContent: "center",justifyContent: "center"}}>
        {this.props.array.map((val, idx) => (
          <div key={idx} style={{height: `${val*2}px`, width: "2px", backgroundColor: "#F08080",display: "inline",margin: "0 1px"}} className="arrayBars">
          </div>
        ))}
      </div>
    );
  }
}

export default Bars;
