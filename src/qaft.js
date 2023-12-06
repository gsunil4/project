import React, { useEffect, useState } from 'react'

function FetchingData (){
    const [data,setData] = useState([])

    useEffect( ( ) =>{
        const fetchData = async ( ) =>{ 

            try{const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
                const result = await response.json();
                setData(result);

            }catch (error) {
            console.error("error go na give now", error)
        }
        }
        fetchData();
    },[])
    return(
        
        <>
        <div>
       

           
           <ul>{ data ? (
            data.map((item) => <h1 key={item.id}>{item.name}</h1>)
            ) : (
                
                <p>loding...</p>
            )}
            </ul>
        </div>
        </>
    )
}
 
export default FetchingData
