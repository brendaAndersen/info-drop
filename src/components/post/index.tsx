import React from "react";
import styles  from "./Post.module.css"
import { GithubLogo, Link } from "phosphor-react";
import { Comment } from "../comment";
import { Avatar } from "../avatar";

type PostProps = {
    title: string,
    content: string
    link: string
    type: string
    image: string
    author: string
    tags: []
}

export function Post({ title, content, tags, link, type, author,image } : PostProps){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={image} />
                    <div className={styles.authorInfo}>
                        <h1>{author}</h1>
                        <p>Web developer</p>
                    </div>
                </div>
                {/* <time>{new Date().getFullYear()}</time> */}
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
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"></textarea>
                <footer>
                    <button type="submit">Postar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}