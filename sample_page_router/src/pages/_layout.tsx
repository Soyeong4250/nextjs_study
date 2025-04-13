export default function Layout({children, data}: {children: React.ReactNode, data:{title:string}}) {
    return (
        <>
            <h1 className="header">{data?.title}</h1>
            <main>{children}</main>
            <hr className="footer" />
            <p className="footer">copyright 2023 SYODA-Tuyano.</p>
        </>
    )
}