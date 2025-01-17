import React from "react";
import styles from './Dialog.module.css';
import { Wrench } from "phosphor-react";

export function Dialog({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.containerDialog}>
            <div className={styles.content}>
                <button className={styles.close} onClick={onClose}>x</button>
                <div className={styles.dialog}>
                    <div className={styles.divTitle}>
                        <h2>Título</h2>
                    </div>
                    <div className={styles.textContent}>
                        <p>Em desenvolvimento</p>
                        <Wrench size={20} />                
                    </div>
                    {/* <div className={styles.buttonDiv}>
                        <button className={styles.button} onClick={onClose}>Fechar</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
