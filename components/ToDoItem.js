import styles from "../styles/ToDoItem.module.css";

export const ToDoItem = ({ key }) => (
    <article className={styles.app_todo_card} key={key}>
        <div className={styles.left_container}>
            <div className={`${styles.title} truncated`}>My First To-Do</div>
            <div className={`${styles.description} truncated`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className={`${styles.right_container} text-right`}>
            <div className={styles.added_ago}>Added 5 min ago</div>
            <button type="button" className={`button ${styles.options}`}><span className="fa fa-ellipsis-v" /></button>
            <div className={styles.due_date}>Due <span className={styles.due_date_value}>10th May, 2022</span></div>
        </div>
        {/* <div className={styles.title_container}>
            <div className={styles.title}>My First To-Do</div>
            <div className={styles.added_ago}>Added 5 min ago</div>
        </div>
        <div className={styles.description_options_container}>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className={styles.due_date}>Due on: <span className={styles.due_date_value}>10th May, 2022</span></div> */}
    </article>
);