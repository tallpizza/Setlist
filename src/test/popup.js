import React from 'react'

const Popup = (props) => {
    return (props.trigger) ? (
        <div>
            <div >
                <button onClick={()=>props.offbtn(false)} >X</button>
                {props.children}
            </div>

        </div>
    ) : "";
}

export { Popup }