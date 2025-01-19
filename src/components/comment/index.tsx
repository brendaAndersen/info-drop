import React, { useState } from "react"
import styles from "./Comment.module.css"
import { HandsClapping, Trash } from "phosphor-react"
import { Avatar } from "../avatar"

export function Comment({ comment, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    function handleDelete(){
        onDeleteComment(comment)
    }
    
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/brendaAndersen.png" />
            <div className={styles.commetBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Brenda Andersen</strong>
                        </div>
                        <button title="Deletar" className={styles.delete} onClick={handleDelete}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>
                <footer>
                    <button className={styles.handsClapping} onClick={handleLikeComment}>
                        <HandsClapping />
                            Aplaudir
                        <span>
                            {likeCount}
                        </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}