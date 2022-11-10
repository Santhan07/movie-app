import React from 'react';

function ColorBox({color}){
    const styles={
        backgroundColor:color,
        height:"35px",
        width:"300px",
        marginTop:"10px"
    }
    return(
        <div style={styles}></div>
    )
}

export default ColorBox;