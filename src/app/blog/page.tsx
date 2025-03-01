import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    }
};

export default async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
             resolve('intentional delay');
        }, 2000);
    });
    return (
        <>
        <Link href="/">Home</Link>
    <h1>My Blog</h1>
    
    <ul
        style={{
            display: "flex",
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
    >
        <li style={{ marginRight: "1rem" }}>
            <Link href="/blog/first">
                <>First Blog Post</>
            </Link>
        </li>
        <li>
            <Link href="/blog/second">
                <>Second Blog Post</>
            </Link>
        </li>
    </ul>
</>

    );
}