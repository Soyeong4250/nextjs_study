import Link from 'next/link';

export default function multipleParams({params}: {params:{name:string, pass:string}}) {
    return (
        <main>
            <h1 className="title">Name page</h1>
            <p className="msg">당신은 '{params.name}'님이군요. 패스는 {params.pass}입니다. </p>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    )
}