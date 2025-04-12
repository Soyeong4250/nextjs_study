import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1 className="title">Top page</h1>
            <p className="msg">This is other page smaple.</p>
            <div>
                <Link href="/ohter">go other page</Link>
            </div>
        </main>
    )
}