import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';
import styles from '../styles/globals.css';

const Blog = () => {
  const posts = [
    { title: 'Our First Blog Post', content: 'This is the content of the first blog post.' },
    { title: 'Another Blog Post', content: 'This is the content of another blog post.' },
  ];

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Blog</h1>
        {posts.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
