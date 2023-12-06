import React,{useState} from 'react'

 const Numbers = ( ) =>{
    const [intor, setIntor]= useState(0);


    const incerment = ( )=>{
        setIntor(intor + 1)
    }
    const decrement = ( ) =>{
        setIntor (intor - 1)
    }


    return(
        <>
        <div>
        <button onClick={incerment}>incerment</button>
        <p>count : {intor}</p>
        <button onClick={decrement}>decrement</button>
        </div>
        </>
    )

}

export default Numbers


