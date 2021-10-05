import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const Options = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName : 'nav-text'
    },
    {
        title:'About Me',
        path: '/AboutMe',
        icon: <AiIcons.AiOutlineUser/>,
        cName : 'nav-text'
    },
]


export default Options