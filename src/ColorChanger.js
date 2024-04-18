import React from "react";
import './colorReader.css'

const ColorChanger = ({color, setColor, textColor, setTextColor}) => {
    return(
        <form onSubmit={(e)=>e.preventDefault()} className="coloname">
            <div >
                <input
                    type="text"
                    className="inputBox"
                    autoFocus
                    placeholder="Type Color"
                    required
                    onChange={(e)=>{
                        setColor(e.target.value);
                    }}
                    value={color}
                />
            </div>
            <div>
                <button 
                    role="submit"
                    className="inputbutton"
                    onClick={()=>
                        setTextColor(!textColor)
                    }
                >
                    change text color
                </button>
            </div>
        </form>
    )
}

export default ColorChanger