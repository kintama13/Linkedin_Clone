import React from "react";
import '../styles/HeaderOption.css';
import { useNavigate } from "react-router-dom";
//import { Avatar } from "@mui/material";

function HeaderOption({Avatar, Icon, title, pathname}) {
    const navigate = useNavigate();
    return <div onClick={() => navigate(pathname)} className="headerOption">
        {Icon && <Icon className='headerOption__icon'/>}
        {Avatar && <Avatar className='headerOption_icon' src={Avatar}/>}
        <h3 className="headerOption__title">{title}</h3>
    </div>
}

export default HeaderOption;