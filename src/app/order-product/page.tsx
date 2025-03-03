"use client";


import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Ordering Product");
        router.push("/products");
    };
    return (
        <>
            <h1>Order Product</h1>   
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
            Order Now
            </button>

            <button className="btn btn-dash">Default</button>
<button className="btn btn-dash btn-primary">Primary</button>
<button className="btn btn-dash btn-secondary">Secondary</button>
<button className="btn btn-dash btn-accent">Accent</button>
<button className="btn btn-dash btn-info">Info</button>
<button className="btn btn-dash btn-success">Success</button>
<button className="btn btn-dash btn-warning">Warning</button>
<button className="btn btn-dash btn-error">Error</button>
        </>
    );
}