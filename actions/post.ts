"use server"

import { createPost } from "@/utils/common";
import { cacheLife, cacheTag, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function getPosts() {
    "use cache";
    cacheLife("days");
    cacheTag("posts");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}

export async function createPostAction(formData: FormData) {
    const title = formData.get("title")?.toString();
    const body = formData.get("body")?.toString();

    if (title && body) {
        await createPost({ title, body });
        redirect("/posts");
    }
}