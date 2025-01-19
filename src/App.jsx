import { Header } from "./components/header"
import { Post } from "./components/post"
import styles from './App.module.css'
import { Sidebar } from './components/sidebar'
import './global.css';
import { postsData } from './utils/Constants';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
          postsData.map((post, index) => (
            <main key={index}>
              <Post 
                title={post.title}
                content={post.content}
                tags={post.tags}
                type={post.type}
                author={post.author}
                image={post.image}
                link={post.link}
                comment={post.comment}
              />      
          </main>
          ))
          } 
        </main>
      </div>
    </div>
  )
}

export default App
