import { createPostAction } from "@/actions/post";

export default function CreatePostPage() {
    return (
        <section className="py-16">
            <h1 className="text-center text-5xl font-bold tracking-tight">
                Create post
            </h1>
            <DummyPostForm />
        </section>
    );
}

function DummyPostForm() {
    return (
        <form action={createPostAction}
            className="mx-auto mt-12 flex max-w-lg flex-col gap-6"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter a title"
                    className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="body" className="text-sm font-medium">
                    Body
                </label>
                <textarea
                    id="body"
                    name="body"
                    rows={6}
                    placeholder="Write your post"
                    className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
                />
            </div>

            <button
                type="submit"
                className="self-end rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
            >
                Save post
            </button>
        </form>
    );
}
