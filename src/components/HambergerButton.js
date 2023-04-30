import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import '../App.css';

function HambergerButton({menuList}) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={'hambergerMenuBtn '+toggle} 
            onClick={() => setToggle((prev) => !prev)} >
            <span></span>
            <span></span>
            <span></span>
            <div className={'main_nav'}>
                { 
                    menuList.map((subTitle, index) => (
                        <Button key={index} variant="text" size="large"><span className='sub_title'>{subTitle}</span></Button>
                    )) 
                }
            </div>
        </div>
    )
}
export default HambergerButton;