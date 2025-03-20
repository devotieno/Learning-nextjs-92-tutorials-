import { notFound } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default async function ProductReview ({params}:
    {
        params: { productId: string; reviewId: string };
    }
)
{
        // Adjust the probability of throwing an error to 25%
        const random = getRandomInt(2);
        if (random === 1) {
            throw new Error("Error loading review");
        }
    
        const {productId, reviewId} = params;
    
        if(parseInt(reviewId) > 1000) {
            notFound();
        }
        return (
            <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <h1>Review {reviewId} of product {productId}</h1>
                <p>This is a detailed review of the product. Please read through the review to get more insights.</p>
            </div>
        );
    }
