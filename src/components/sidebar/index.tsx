import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import { Alien, CaretDoubleRight, FastForward, PencilLine } from 'phosphor-react'
import { Dialog } from '../dialog';
import { Avatar } from '../avatar';

export function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <>
        <aside className={styles.sidebar}>
            <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg"
            alt="coding" className={styles.image} />
            <div className={styles.profile}>
                <Avatar src="https://github.com/brendaAndersen.png" />
                <strong>Brenda Andersen</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a className={styles.button} href="#">
                <FastForward size={20} />
                    <p onClick={handleOpenModal}>Sobre mim</p>
                </a>
            </footer>
           
        </aside>
        {
            <Dialog isOpen={isModalOpen} onClose={handleCloseModal} >
                <div className={styles.dialog}>
                    <h2>Titulo</h2>
                    <p>asdasda</p>
                    <div className={styles.buttonDiv}>
                        
                    <button className={styles.button} onClick={handleCloseModal}>Fechar</button>
                    </div>
                </div>
            </Dialog>
        }
        </>
    )
}
