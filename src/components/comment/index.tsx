import React from "react"
import styles from "./Comment.module.css"
import { HandsClapping, Trash } from "phosphor-react"
import { Avatar } from "../avatar"

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/brendaAndersen.png" />
            <div className={styles.commetBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Brenda Andersen</strong>
                        </div>
                        <button title="Deletar" className={styles.delete}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Exemplo de comentário.</p>
                </div>
                <footer>
                    <button className={styles.handsClapping}>
                        <HandsClapping />
                        <span>
                            Aplaudir
                        </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}