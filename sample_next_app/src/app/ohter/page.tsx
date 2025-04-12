'use client';

// import './style.css';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.css';
import JSXStyle from 'styled-jsx/style';

export default function Other() {
    return (
        <main>
            <JSXStyle>
                {`p.jsx-msg {
                margin: 10px;
                text-align: center;
                color: red;
                font-weight: bold;
                }`}
            </JSXStyle>
            <h1 className={styles.title}>Other page</h1>
            <p className="jsx-msg">이건 다른 페이지입니다.</p>
            <div>
                <Image src="/quakka.jpg" width={200} height={200} alt='quakka.jpg' />
            </div>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    )
}