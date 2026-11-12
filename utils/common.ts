
import { prisma } from "./prisma";


export function isEmptyJson(obj: unknown) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

export async function createPost({ title, body }
    : { title: string, body: string }) {
    const response = await prisma.post.create({
        data: {
            body: body,
            title: title,
            userId: 1
        }
    });
    return response;
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    //     {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title,
    //             body,
    //             userId: 2
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         }
    //     });
}

export async function getPostById(id: string) {
    const response = await prisma.post.findFirst({
        where: {
            id: Number.parseInt(id)
        }
    });
    return response;
}

export async function upVotePost(id: number) {
    const response = await prisma.post
        .update({
            where: {
                id: id
            },
            data: {
                votes: {
                    increment: 1
                }
            }
        });
    return response;
}