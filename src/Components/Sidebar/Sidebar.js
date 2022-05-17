import React, {useState} from 'react';
import './Sidebar.css';
import plusIcon from '../../assets/plus.png';
import '../../assets/delete.png';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';


const Sidebar = (props) => {
    const colors =['#FF9AA2','#fff9ae','#FFDAC1','#E2F0CB','#B5EAD7','#C7CEEA'];
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
