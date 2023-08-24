import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
        <h5>User List</h5>
        <input className={styles.input} type="text" placeholder="Search..." / >
        <img className={styles.avatar} src="https://github.com/tecmessias.png" />
        </header>
    );
}