import Link from 'next/link';


export default function Page() {
    return (
    <>
    <h1>Welcome Home</h1>
    <ul
       style={{
        display: "flex",
        listStyleType: "none",
        padding: 0,
        margin: 0,
      }}
    >
    <li style={{ marginRight: "1rem"}}>
    <Link href="/about">About</Link>
    </li>

    <li style={{ marginRight: "1rem"}}>
    <Link href="/products">Products</Link>
    </li>
    
    <li style={{ marginRight: "1rem"}}>
    <Link href="/blog">Blog</Link>
    </li>

    <li style={{ marginRight: "1rem"}}>
    <Link href="/auth/register">Register</Link>
    </li>
    
    <li>
    <Link href="/auth/login">Login</Link>
    </li>
    
    </ul>
    </>
);
}