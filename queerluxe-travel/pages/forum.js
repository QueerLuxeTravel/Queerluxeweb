import Header from '../components/Header';
import Footer from '../components/Footer';
import ForumPost from '../components/ForumPost';
import styles from '../styles/globals.css';

const Forum = () => {
  const posts = [
    { title: 'First Forum Post', content: 'This is the content of the first forum post.' },
    { title: 'Another Forum Post', content: 'This is the content of another forum post.' },
  ];

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Forum</h1>
        {posts.map((post, index) => (
          <ForumPost key={index} title={post.title} content={post.content} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Forum;
