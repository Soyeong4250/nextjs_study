import { Inter } from "next/font/google";
import Link from "next/link";
// import { GetStaticProps } from 'next';

// export const getStaticProps = ((context) => {
//   const data = {
//     title: "Index page",
//     msg: "시작페이지입니다."
//   }
//   return {props: {data}}
// })


const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <main>
      <h1 className="header">Static page</h1>
      <p>정적 페이지입니다. 빌드 시에 렌더링됩니다.</p>
    </main>
  );
}
