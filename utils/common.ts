import { updateTag } from "next/cache";


export function isEmptyJson(obj: unknown) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

export async function createPost({ title, body }
    : { title: string, body: string }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            body: JSON.stringify({
                title,
                body,
                userId: 2
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    updateTag("posts");
}