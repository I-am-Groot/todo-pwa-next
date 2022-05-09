import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Mi-ToDo App</title>
                <link rel="icon" href="/fav.ico" />
                <meta name="description" content="To-Do App By Mi" />
                <meta charset='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                <meta name='keywords' content='Keywords' />
                <link rel="manifest" href="/manifest.json" />
                <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#4d2c91"/>
            </Head>
            <main id="container" className={styles.container}>
                <section className={styles.app_status_bar}></section>
                <section className={styles.app_bar}>
                    <h2>Mi-ToDo App</h2>
                </section>
                <section className={styles.app_content}>
                    <section className={styles.app_fab_container}>
                        <a href="#" className={styles.circular_button}>+</a>
                    </section>
                    <section className={styles.app_scroll_view}>
                        {
                            (new Array(20)).fill(0).map((_, index) => (
                                <article className={styles.app_todo_card} key={index}>
                                    This is test card {index}.
                                </article>
                            ))
                        }
                    </section>
                </section>
            </main>
        </div>
    );
}