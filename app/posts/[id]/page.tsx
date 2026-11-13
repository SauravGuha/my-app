import { upVotePostAction } from "@/actions/post";
import VoteButton from "@/components/voteButton";
import { getPostById } from "@/utils/common";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";


type PostPageProps = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


function isEmptyJson(obj: unknown) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

async function PostDetails({ params, searchParams }: PostPageProps) {
    await connection();
    const { id } = await params;

    const postDetails = await getPostById(id);
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
                    {postDetails!.title}
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-neutral-700">
                    {postDetails!.body}
                </p>
                <div className="mt-8 flex items-center gap-4">
                    <span className="text-sm font-medium text-neutral-500">Votes</span>
                    <span className="text-2xl font-bold">{postDetails!.votes}</span>
                    <VoteButton id={postDetails!.id} name="Upvote" />
                    <VoteButton id={postDetails!.id} name="Downvote" />
                </div>
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
