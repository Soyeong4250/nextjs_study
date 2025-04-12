// import './style.css';
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <h1 className={styles.title}>Other page</h1>
            <p className={styles.msg}>이건 다른 페이지입니다.</p>
            <div>
                <Image src="/quakka.jpg" width={200} height={200} alt='quakka.jpg' />
            </div>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    )
}