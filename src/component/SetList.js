import React from 'react'
import './SetList.css'
import Slider from './Slider'


const Today = () => {
    let newDate = new Date()
    let date_raw = newDate.getDate();
    let month_raw = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date, month

    date_raw < 10 ? date = "0" + date_raw.toString() : date = date_raw.toString()
    month_raw < 10 ? month = "0" + month_raw.toString() : month = month_raw.toString()

    return <div>
        {year}.{month}.{date}
    </div>
}

const SessionList = () => {

    const [users, setUsers] = React.useState({"session": []});
    React.useEffect(() => {
        fetch('./db/2022.11.07.json')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    });


    return (
        <div className='namelist'>
            <button className='dropdown_btn'>Session List
            </button>
            <div className='dropdown-content'>
                {
                    users.session.map((value) => (
                        <p key={value.id}>{value.inst} : {value.name}</p>
                    )) }
            </div>
        </div>
    )
}

const SetList_name = () => {
    return <div className='name'>
        콘티 이름:
        <div>
            { }
        </div>
    </div>

}

const SetList_ref = () => {
    return <div className='refference'>
        레퍼런스 :
        <div>
            { }
        </div>
    </div>
}




const Main_screen = () => {
    return <div className='main'>
        <div className='info'>
            <Today></Today>
            <SessionList></SessionList>
        </div>
        <div className='setlist_info'>
            <SetList_name></SetList_name>
            <SetList_ref></SetList_ref>
        </div>
        <input className='order'></input>
        <div className='Slide'>
            <Slider />
        </div>
        <div className='bottom'>
            Intro:...
        </div>
    </div>
};

export { Main_screen }
