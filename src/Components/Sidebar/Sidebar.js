import React, {useState} from 'react';
import './Sidebar.css';


import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';


const Sidebar = (props) => {
    const colors =['#f2b95a','#f5dc6f','#f5c0cd','#b1d8b4','#8ccabb','#d6c2d0','#ff9aa2'];
    const [listIsOpen, setListIsOpen] = useState(false);

    return(
        <div className="sidebar">
            <AddCircleOutlineRoundedIcon sx={{ fontSize: 50 }} onClick={()=>setListIsOpen(!listIsOpen)}/>
            <ul className={`sidebar_list ${listIsOpen?"sidebar_list_active":"sidebar_list"}`}>
                {colors.map((element, index) =>(
                    <li
                    key={index}
                    style={{backgroundColor:element}}
                    className="sidebar_list_item"
                    onClick={() => props.addNote(element)}
                    ></li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar;
