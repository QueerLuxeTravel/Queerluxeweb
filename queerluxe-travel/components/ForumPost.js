import styles from '../styles/ForumPost.module.css';

const ForumPost = ({ title, content }) => {
  return (
    <div className={styles.forumPost}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ForumPost;
