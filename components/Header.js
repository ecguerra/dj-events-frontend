import Link from 'next/link'
import styles from '@/styles/Header.module.css'

// Link uses href instead of 'to' in react-router-dom
// 'a' tag technically isn't needed anymore, but is useful if you want to style

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>DJ Events</a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a>Events</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
