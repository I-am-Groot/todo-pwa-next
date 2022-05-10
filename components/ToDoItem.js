import styles from "../styles/ToDoItem.module.css";

export const ToDoItem = ({ index }) => (
    <article className={styles.app_todo_card} key={index}>
        <div className={styles.title_container}>
            <div className={styles.title}>My First To-Do</div>
            <div className={styles.added_ago}>Added 5 min ago</div>
        </div>
        <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.due_date}>Due on: <span className={styles.due_date_value}>10th May, 2022</span></div>
    </article>
);