import React from 'react';
import { useState } from 'react';

function Counter(){
    const [like,setLike]=useState(0);
    const[dislike,setDislike]=useState(0);

    return(
        <div>
            <button className='like-style' onClick={()=>{setLike(like+1)}}> 👍{like}</button>
            <button className='like-style' onClick={()=>{setDislike(dislike+1)}}>👎{dislike}</button>            
        </div>
    );   
}

export default Counter;