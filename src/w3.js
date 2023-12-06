import React from 'react';
//import ReactDOM from 'react-dom/client';

function Car ({parent}) {
  return(<>
  <h2>I am a !</h2>;
    <p>{parent}</p>
    </>
  )
}

//function Garage () {
//  const dad="jdhck";
//  return (
//    <>
//	    <h1>Who lives in my garage?</h1>
	    
//      <Car parent={dad}/>
//    </>
//  );
//}

export default Car;