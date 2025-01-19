import React, { useState } from "react";
import styles  from "./Post.module.css"
import { Link } from "phosphor-react";
import { Comment } from "../comment";
import { Avatar } from "../avatar";

type PostProps = {
    title: string,
    content: string
    link: string
    type: string
    image: string
    author: string
    comment: []
    tags: []
}


export function Post({ title, content, tags, link, type, author, image, comment } : PostProps){
    const [comments, setComments] = useState<any>([
        comment,
    ]);
    const [newComment, setNewCommentText] = useState('');
    const [show, setShow] = useState(false);

    function handleSubmit(event) {
        event.preventDefault()

        setComments([...comments, newComment]);
        setNewCommentText('');
        setShow(!show)
    }
    function handleNewCommentChange(event) {
        setNewCommentText(event?.target?.value);
        event.target.setCustomValidity('');
    }
    function deleteComment(commentToDelete:any){
        setShow(!show)
        const finalListComments = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(finalListComments);

    }
    function handleNewCommentInvalid(event){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }
    return (
        <article className={styles.post }>
            <header>
                <div className={styles.author}>
                    <Avatar src={image} />
                    <div className={styles.authorInfo}>
                        <h1>{author}</h1>
                        <p>Web developer</p>
                    </div>
                </div>
                <time>{type}</time>
            </header>
            <div className={styles.content}>
                <b>
                    {title}
                </b>
                <p className={styles.contentText}>
                    {content}    
                </p>
                <p className={styles.link}>
                    <Link size={20} className={styles.link}/>
                    <a href={link} style={{ marginLeft: 10 }}>Mais informações</a>
                </p>
                <p className={styles.tags}>
                { tags.map((item, index) => (
                    <a key={index} href="#">#{item}</a>
                ))}
                </p>
            </div>
            <form onSubmit={handleSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"
                required
                onInvalid={handleNewCommentInvalid}
                onChange={handleNewCommentChange}
                value={newComment}
                ></textarea>
                <footer className={"commentFormFocus"}>
                    <button type="submit" >Postar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map((comment, index) => {
                        return comment.length !== 0 && <Comment key={index} comment={comment} onDeleteComment={deleteComment}/>
                    })
                }
            </div>
        </article>
    )
}