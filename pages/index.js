import Head from "next/head";
import Link from "next/link";

import { ToDoItem } from "../components/ToDoItem";

import styles from "../styles/Home.module.css";


const todoArr = [
    {
        id: 1,
        title: "My First To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
    {
        id: 2,
        title: "My Second To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
    {
        id: 3,
        title: "My Third To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
    {
        id: 4,
        title: "My Fourth To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
    {
        id: 5,
        title: "My Fifth To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
    {
        id: 6,
        title: "My Sixth To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
    {
        id: 7,
        title: "My Seventh To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
    {
        id: 8,
        title: "My Eighth To-Do",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        addedAt: "2022-05-12",
        dueDate: "2022-05-13",
    },
];

export default function Home() {
    return (
        <div>
            <Head>
                <title>Mi-TODO APP</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="To-Do App By Mi" />
                <meta charset='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                <meta name='keywords' content='Keywords' />
                <link rel="manifest" href="/manifest.json" />
                <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#4d2b90"/>
            </Head>
            <main id="container" className={styles.container}>
                <section id="app_bar" className={styles.app_status_bar} />
                <section className={styles.app_bar}>
                    <h2>Mi-TODO APP</h2>
                </section>
                <section className={styles.app_content}>
                    <section className={styles.app_fab_container}>
                        <a href="#" className={styles.circular_button}>+</a>
                    </section>
                    <section id="app_scroll_view" className={styles.app_scroll_view}>
                        {
                            todoArr.map((todo, index) => <ToDoItem key={index} todo={todo} />)
                        }
                    </section>
                </section>
            </main>
        </div>
    );
}