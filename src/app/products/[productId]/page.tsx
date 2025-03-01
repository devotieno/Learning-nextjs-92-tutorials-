import Link from 'next/link';

export default async function ProductDetails(
    {params}:
    {params: Promise<{ productId: string }>;}
) 

    {
    const productId  = (await params).productId;
    return (
    <>
    <Link href="/">Home</Link>  
    <h1>Details about product {productId}</h1>
    </>
    
    );
    }