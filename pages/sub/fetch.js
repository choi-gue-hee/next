import { useEffect, useState } from "react"
import Link from 'next/link'
export default function Fetch() {
    const [user, setUser] = useState({name:null});
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
            .then(type=>type.json())
            .then(result=>{
                setUser(result);
            })
    })
    return <>
        <h1>/page/sub/fetch.js</h1>
        <p>{user.name}</p>
        <Link href="/">
            <a>/pages/index.js</a>
        </Link>
    </>
}