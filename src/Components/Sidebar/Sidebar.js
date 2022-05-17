import React, {useState} from 'react';
import './Sidebar.css';
import plusIcon from '../../assets/plus.png';
import '../../assets/delete.png';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';


const Sidebar = () => {
    const colors =['#abdee6','#cbaacb','#ffffb5','#ffccb6','#f3b0c3','#97c1a9'];
    const [listIsOpen, setListIsOpen] = useState(false)
    return(
        <div className="sidebar">
            <AddCircleOutlineRoundedIcon sx={{ fontSize: 50 }} onClick={()=>setListIsOpen(!listIsOpen)}/>
            <ul className={`sidebar_list ${listIsOpen?"sidebar_list_active":"sidebar_list"}`}>
                {colors.map((element, index) =>(
                    <li
                    key={index}
                    style={{backgroundColor:element}}
                    className="sidebar_list_item"
                    ></li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar;
