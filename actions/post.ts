"use server"

import { createPost, upVotePost } from "@/utils/common";
import { cacheLife, cacheTag, revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/utils/prisma";

export async function getPosts() {
    "use cache";
    cacheLife("days");
    cacheTag("posts");
    const response = await prisma.post.findMany();
    //const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response;
}

export async function createPostAction(formData: FormData) {
    const title = formData.get("title")?.toString();
    const body = formData.get("body")?.toString();

    if (title && body) {
        await createPost({ title, body });
        updateTag("posts");
        redirect("/posts");
    }
}

export async function upVotePostAction(id: number) {
    await upVotePost(id);
    revalidatePath(`/posts/${id}`);
}