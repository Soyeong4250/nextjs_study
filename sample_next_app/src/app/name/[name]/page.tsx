import Link from 'next/link';

export default function Name({params}:{params:{name: string}}) {
    return (
        <main>
            <h1 className="title">Name page</h1>
            <p className="msg">당신은 '{params.name}'님이군요.</p>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    )
}