import { createPost } from "@/utils/common";


export async function POST(request: Request) {
    const { title, body } = await request.json();
    await createPost({ title, body });
}