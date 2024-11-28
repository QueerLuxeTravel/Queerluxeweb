import styles from '../styles/BlogPost.module.css';

const BlogPost = ({ title, content }) => {
  return (
    <div className={styles.blogPost}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
