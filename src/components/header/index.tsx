import React from "react";
import styles from './Header.module.css'
import img from './../../../public/images/symbol.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={img} alt="" />
        </header>
    )
}