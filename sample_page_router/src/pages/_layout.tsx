export default function Layout({children}: {children: any}) {
    return (
        <>
            <h1 className="header">Next Application</h1>
            <main>{children}</main>
            <hr className="footer" />
            <p className="footer">copyright 2023 SYODA-Tuyano.</p>
        </>
    )
}