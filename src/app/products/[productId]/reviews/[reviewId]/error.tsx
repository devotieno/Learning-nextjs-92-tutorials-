"use client";

export default function ErrorBoundary({error}: {error: Error}) {
    return <div>
        <p>{error.message}</p>
    </div>
}