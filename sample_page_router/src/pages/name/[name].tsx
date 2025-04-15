import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({subsets: ['latin']})

export default function Name({data}: {data: {title: string, msg: string}}) {
    const router = useRouter();
    return (
        <main>
            <h1 className="header">{data?.title}</h1>
            <p>name: {router.query.name}</p>
            <p>message: {data?.msg}</p>
            <div><Link href="/">Go Back!!</Link></div>
        </main>
    );
}

export function getServerSideProps({params} : {params: {name: string}}) {
    const data = {
        kim: {
            title: 'Kim-web',
            msg: "This is Kim's web site."
        },
        lee: {
            title: 'Lee의 방',
            msg: '여기는 Lee의 방입니다.'
        },
        park: {
            title: 'Park의 페이지',
            msg: '안녕! Park의 페이지입니다!'
        }
    };

    if (data[params.name as keyof typeof data]) {
        return {
            props: {
                data: data[params.name as keyof typeof data]
            }
        };
    } else {
        return {
            props: {
                data: {title: "No data", msg:"데이터가 없습니다."}
            }
        };
    }
}