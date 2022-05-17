import Dropdown from "react-bootstrap/Dropdown";
import "../utils/helpers/string.js"; 

import styles from "../styles/ToDoItem.module.css";

export const ToDoItem = ({ todo }) => (
    <article className={styles.app_todo_card}>
        <div className={styles.left_container}>
            <div className={`${styles.title} line-clamp-3`}>{todo.title}</div>
            <div className={`${styles.description} line-clamp-3`}>{todo.description}</div>
        </div>
        <div className={`${styles.right_container} text-right`}>
            <div className={styles.added_ago}>Added {todo.addedAt.timeAgo()}</div>
            <Dropdown>
                <Dropdown.Toggle as="button" id="options" className={`no-caret button ${styles.options}`}>
                    <span className="fa fa-lg fa-ellipsis-v" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#"><i className="fa-solid fa-pencil me-3" />Edit</Dropdown.Item>
                    <Dropdown.Item href="#"><i className="fa-solid fa-trash me-3" />Remove</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className={styles.due_date}>Due <span className={styles.due_date_value}>{todo.dueDate.dueOn()}</span></div>
        </div>
    </article>
);