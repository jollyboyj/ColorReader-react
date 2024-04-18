import React from "react";
import './colorReader.css'

const ShowColor = ({color, textColor}) => {
    
    return(
        <section 
        
            style={{
                backgroundColor:color,
                color:textColor? '#000' : '#fff'
            }}
        >
            
            <div className="colorDisplay" id='colordis'>
                <label
                    className="colorname"
                >
                    {color? color : "No Color"}
                </label>
            </div>
            

        </section>
    )
}

ShowColor.defaultProps = {
    color : "Empty value"
}

export default ShowColor