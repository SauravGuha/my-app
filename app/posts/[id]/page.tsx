import { notFound } from "next/navigation";
import { Suspense } from "react";


type PostPageProps = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getPost(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
}

function isEmptyJson(obj: unknown) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

async function PostDetails({ params, searchParams }: PostPageProps) {
    const { id } = await params;

    const postDetails = await getPost(id);
    if (isEmptyJson(postDetails)) {
        notFound();
    }
    else {
        const resolvedParams = await searchParams;

        const rawColour = resolvedParams.color;
        const colour = (Array.isArray(rawColour) ? rawColour[0] : rawColour) || "black";

        return (
            <article className="py-16" style={{ color: colour }}>
                <h1 className="mt-4 text-center text-4xl font-bold tracking-tight capitalize">
                    {postDetails.title}
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-neutral-700">
                    {postDetails.body}
                </p>
            </article>
        );
    }
}

export default async function PostPage(
    props: PostPageProps) {
    return (<Suspense fallback={"loading..."}>
        <PostDetails {...props} />
    </Suspense>);
}
