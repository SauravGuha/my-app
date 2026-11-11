
import { getPosts } from "@/actions/post";
import Link from "next/link";
import { Suspense } from "react";

async function PostList() {
    const posts = await getPosts();
    return (<ul className="mt-12 divide-y divide-neutral-200">
        {posts.map((post: { id: number; title: string; body: string }) => (
            <li key={post.id} className="py-6">
                <Link href={`/posts/${post.id}?color=blue`}>
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                        Post {post.id}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold capitalize">
                        {post.title}
                    </h2>
                </Link>
            </li>
        ))}
    </ul>);
}

export default async function PostsPage() {

    return (
        <section className="py-16">
            <h1 className="text-center text-5xl font-bold tracking-tight">
                Posts
            </h1>
            <div className="mt-8 flex justify-center">
                <Link
                    href="/posts/create"
                    className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
                >
                    Create post
                </Link>
            </div>
            <Suspense fallback={"Loading..."}>
                <PostList />
            </Suspense>
        </section>
    );
}