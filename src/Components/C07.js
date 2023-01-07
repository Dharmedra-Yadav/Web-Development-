import React from "react";

export default function C07() {
  // let a=10,b=20
  let arr = [1, 2, 3, 4, 5];
  let res = arr.map(function(val){
    return 2 * val;
  });

  return (
    <div>
      {/* <h2>The Addition of a anb b {a+b}</h2>
     <h2>The Subtraction of a and b {a-b}</h2>
     <h2>The Multiplication of a and b {a*b}</h2>
     <h2>The Division of a and b {a/b}</h2>
     <h2>The Remainder of a and b {a%b}</h2> */}
      {/* <h3>Input==>{arr + " "}</h3>
      <h3>Output==>{res + " "}</h3> */}
    
    </div>
  );
}
