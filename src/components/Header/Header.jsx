import style from './style.module.css'
import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import React, { useState, useEffect } from 'react';

function Header() {
    return (<header className={style.header}>
        <div className="wrapper">
            <div className={style.inner}>
                <Logo />
                <NavList />
            </div>


        </div>
    </header>
    );
}

export default Header;