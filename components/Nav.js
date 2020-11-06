import NavStyle from "../styles/Nav.module.css"

import Link from "next/link"

const Nav = () => {
    const pages = [
        {page: "home", path: "/"},
        {page: "about", path: "/about"},
    ]

    return (
        <>
            <div className={NavStyle.container}>
                {pages.map(item => (
                    <li className={NavStyle.list}><Link href={item.path}><a className={NavStyle.link}>{item.page}</a></Link></li>
                ))}
            </div>
        </>
    )
}

export default Nav