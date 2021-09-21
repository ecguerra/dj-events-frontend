import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function NotFound() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1><FaExclamationTriangle /> 404'd!</h1>
                <h4>Nooo my browser!</h4>
                <Link href='/'>Go back home</Link>
            </div>
        </Layout>
    )
}
